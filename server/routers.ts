import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  missionForward: router({
    submit: publicProcedure
      .input(z.object({
        fullName: z.string().min(1, "Full name is required"),
        email: z.string().email("Valid email is required"),
        phone: z.string().min(1, "Phone number is required"),
        applicantType: z.enum(["foster_youth", "veteran"]),
        age: z.number().optional(),
        location: z.string().optional(),
        housingPreference: z.enum(["georgia", "hawaii", "either"]).optional(),
        techExperience: z.string().optional(),
        careerGoals: z.string().optional(),
        additionalInfo: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        await db.createMissionForwardApplication(input);
        return { success: true };
      }),
    list: protectedProcedure.query(async ({ ctx }) => {
      // Only admins can view applications
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return await db.getAllMissionForwardApplications();
    }),
  }),

  grantflow: router({
    joinWaitlist: publicProcedure
      .input(z.object({
        organizationName: z.string().min(1, "Organization name is required"),
        contactName: z.string().min(1, "Contact name is required"),
        email: z.string().email("Valid email is required"),
        phone: z.string().optional(),
        organizationType: z.string().optional(),
        numberOfStaff: z.number().optional(),
        currentGrantProcess: z.string().optional(),
        interests: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        await db.createGrantflowWaitlistEntry(input);
        return { success: true };
      }),
    listWaitlist: protectedProcedure.query(async ({ ctx }) => {
      // Only admins can view waitlist
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return await db.getAllGrantflowWaitlistEntries();
    }),
  }),

  donation: router({
    createCheckoutSession: publicProcedure
      .input(z.object({
        amount: z.number().min(50, "Minimum donation is $0.50"),
        donorName: z.string().optional(),
        donorEmail: z.string().email(),
        donationType: z.enum(["one_time", "recurring"]).default("one_time"),
      }))
      .mutation(async ({ input, ctx }) => {
        const Stripe = (await import("stripe")).default;
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
          apiVersion: "2025-11-17.clover",
        });

        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items: [
            {
              price_data: {
                currency: "usd",
                product_data: {
                  name: input.donationType === "recurring" ? "Monthly Donation to Queen Ventures" : "Donation to Queen Ventures",
                  description: "Support our mission to empower communities through housing and technology.",
                },
                unit_amount: input.amount,
                ...(input.donationType === "recurring" && {
                  recurring: {
                    interval: "month",
                  },
                }),
              },
              quantity: 1,
            },
          ],
          mode: input.donationType === "recurring" ? "subscription" : "payment",
          success_url: `${ctx.req.headers.origin}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${ctx.req.headers.origin}/donate`,
          customer_email: input.donorEmail,
          metadata: {
            donor_name: input.donorName || "",
            donor_email: input.donorEmail,
            donation_type: input.donationType,
          },
          allow_promotion_codes: true,
        });

        return { checkoutUrl: session.url };
      }),
    list: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return await db.getAllDonations();
    }),
  }),

  newsletter: router({
    subscribe: publicProcedure
      .input(z.object({
        email: z.string().email("Valid email is required"),
        name: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        await db.createNewsletterSubscription(input);
        return { success: true };
      }),
    list: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return await db.getAllNewsletterSubscriptions();
    }),
  }),

  chat: router({
    sendMessage: publicProcedure
      .input(z.object({
        sessionId: z.string(),
        message: z.string().min(1, "Message cannot be empty"),
      }))
      .mutation(async ({ input }) => {
        const { invokeLLM } = await import("./_core/llm");
        
        // Get or create conversation
        const conversation = await db.getOrCreateConversation(input.sessionId);
        
        // Save user message
        await db.createChatMessage({
          conversationId: conversation.id,
          role: "user",
          content: input.message,
        });
        
        // Get conversation history
        const messages = await db.getConversationMessages(conversation.id);
        
        // Build message history for LLM
        const llmMessages = [
          {
            role: "system" as const,
            content: `You are a helpful assistant for Queen Ventures, a 501(c)(3) nonprofit community development association (EIN: 33-2444800). Your role is to answer questions about our programs and services.

KEY INFORMATION:

**About Queen Ventures:**
- Mission: Empowering communities through housing and technology
- Focus areas: Financial literacy, stewardship pathways, and community development
- We provide stable housing and technology training to foster youth and veterans

**Mission Forward Program:**
- 180-day comprehensive program for foster youth (ages 18-24) and veterans
- Partnership with Cloud 100 (program operator and training provider)
- Two housing locations: Georgia and Hawaii
- Provides:
  * Stable housing for 6 months
  * Technology skills training (Cloud computing, AI/ML, cybersecurity)
  * Career development and job placement support
  * Life skills and financial literacy training
- Phase 1 (Days 1-90): Foundation building with housing, orientation, and basic tech training
- Phase 2 (Days 91-180): Advanced training, certifications, and job placement
- Founded by Jaaniyah Walker to break cycles of instability
- Application available at the website

**Grantflow (Coming Soon):**
- Fully automated grant identification and submission software
- Helps nonprofits and organizations streamline grant applications
- Features: AI-powered grant matching, automated application drafting, deadline tracking
- Currently accepting waitlist sign-ups

**How to Support:**
- Donations: One-time or monthly recurring donations accepted
- All donations are tax-deductible
- Donation impact: $50 = training materials, $250 = one week housing, $1,000 = one month of full program
- Contact: info@queenventures.org
- Location: 8 The Green, Dover, DE 19901

Be friendly, professional, and concise. If asked about topics outside Queen Ventures' scope, politely redirect to our programs. Encourage visitors to apply to Mission Forward, join the Grantflow waitlist, or donate.`,
          },
          ...messages.map(msg => ({
            role: msg.role as "user" | "assistant",
            content: msg.content,
          })),
        ];
        
        // Get AI response
        const response = await invokeLLM({
          messages: llmMessages,
        });
        
        const assistantMessageContent = response.choices[0]?.message?.content;
        const assistantMessage = typeof assistantMessageContent === "string" 
          ? assistantMessageContent 
          : "I'm sorry, I couldn't generate a response. Please try again.";
        
        // Save assistant message
        await db.createChatMessage({
          conversationId: conversation.id,
          role: "assistant",
          content: assistantMessage,
        });
        
        return {
          message: assistantMessage,
        };
      }),
    getHistory: publicProcedure
      .input(z.object({
        sessionId: z.string(),
      }))
      .query(async ({ input }) => {
        const conversation = await db.getOrCreateConversation(input.sessionId);
        const messages = await db.getConversationMessages(conversation.id);
        return messages;
      }),
  }),
});

export type AppRouter = typeof appRouter;
