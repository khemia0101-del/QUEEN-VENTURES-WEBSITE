import type { Request, Response } from "express";
import Stripe from "stripe";
import { getDb } from "./db";
import { donations } from "../drizzle/schema";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-11-17.clover",
});

export async function handleStripeWebhook(req: Request, res: Response) {
  const sig = req.headers["stripe-signature"];

  if (!sig) {
    console.error("[Webhook] Missing stripe-signature header");
    return res.status(400).send("Missing signature");
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("[Webhook] Signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log(`[Webhook] Received event: ${event.type} (${event.id})`);

  // Handle test events
  if (event.id.startsWith("evt_test_")) {
    console.log("[Webhook] Test event detected, returning verification response");
    return res.json({
      verified: true,
    });
  }

  // Handle real events
  try {
    switch (event.type) {
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        await handlePaymentSuccess(paymentIntent);
        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        await handlePaymentFailure(paymentIntent);
        break;
      }

      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("[Webhook] Checkout session completed:", session.id);
        // Payment intent will be handled by payment_intent.succeeded
        break;
      }

      default:
        console.log(`[Webhook] Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error("[Webhook] Error processing event:", error);
    res.status(500).json({ error: "Webhook processing failed" });
  }
}

async function handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
  const db = await getDb();
  if (!db) {
    console.error("[Webhook] Database not available");
    return;
  }

  const metadata = paymentIntent.metadata || {};
  const donorEmail = metadata.donor_email || paymentIntent.receipt_email || "";
  const donorName = metadata.donor_name || "";
  const donationType = metadata.donation_type === "recurring" ? "recurring" : "one_time";

  try {
    await db.insert(donations).values({
      stripePaymentIntentId: paymentIntent.id,
      stripeCustomerId: paymentIntent.customer as string || undefined,
      donorName: donorName || undefined,
      donorEmail,
      amountCents: paymentIntent.amount,
      currency: paymentIntent.currency,
      donationType,
      status: "succeeded",
      metadata: JSON.stringify(metadata),
    });

    console.log(`[Webhook] Donation recorded: ${paymentIntent.id} - $${paymentIntent.amount / 100}`);
  } catch (error) {
    console.error("[Webhook] Error recording donation:", error);
  }
}

async function handlePaymentFailure(paymentIntent: Stripe.PaymentIntent) {
  const db = await getDb();
  if (!db) {
    console.error("[Webhook] Database not available");
    return;
  }

  const metadata = paymentIntent.metadata || {};
  const donorEmail = metadata.donor_email || paymentIntent.receipt_email || "";

  try {
    await db.insert(donations).values({
      stripePaymentIntentId: paymentIntent.id,
      stripeCustomerId: paymentIntent.customer as string || undefined,
      donorEmail,
      amountCents: paymentIntent.amount,
      currency: paymentIntent.currency,
      donationType: "one_time",
      status: "failed",
      metadata: JSON.stringify(metadata),
    });

    console.log(`[Webhook] Failed donation recorded: ${paymentIntent.id}`);
  } catch (error) {
    console.error("[Webhook] Error recording failed donation:", error);
  }
}
