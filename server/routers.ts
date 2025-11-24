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
});

export type AppRouter = typeof appRouter;
