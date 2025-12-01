import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

describe("donation.createCheckoutSession", () => {
  it("successfully creates a checkout session for one-time donation", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {
          origin: "https://test.example.com",
        },
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const donationData = {
      amount: 5000, // $50.00
      donorName: "John Doe",
      donorEmail: "john@example.com",
      donationType: "one_time" as const,
    };

    const result = await caller.donation.createCheckoutSession(donationData);

    expect(result).toHaveProperty("checkoutUrl");
    expect(result.checkoutUrl).toContain("checkout.stripe.com");
  });

  it("successfully creates a checkout session for recurring donation", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {
          origin: "https://test.example.com",
        },
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const donationData = {
      amount: 2500, // $25.00
      donorEmail: "jane@example.com",
      donationType: "recurring" as const,
    };

    const result = await caller.donation.createCheckoutSession(donationData);

    expect(result).toHaveProperty("checkoutUrl");
    expect(result.checkoutUrl).toContain("checkout.stripe.com");
  });

  it("validates minimum donation amount", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {
          origin: "https://test.example.com",
        },
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const invalidData = {
      amount: 25, // $0.25 - below minimum
      donorEmail: "test@example.com",
      donationType: "one_time" as const,
    };

    await expect(
      caller.donation.createCheckoutSession(invalidData)
    ).rejects.toThrow();
  });
});

describe("newsletter.subscribe", () => {
  it("successfully subscribes to newsletter", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const subscriptionData = {
      email: `test${Date.now()}@example.com`, // Unique email to avoid duplicates
      name: "Test User",
    };

    const result = await caller.newsletter.subscribe(subscriptionData);

    expect(result).toEqual({ success: true });
  });

  it("validates email format", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const invalidData = {
      email: "invalid-email",
    };

    await expect(
      caller.newsletter.subscribe(invalidData as any)
    ).rejects.toThrow();
  });
});
