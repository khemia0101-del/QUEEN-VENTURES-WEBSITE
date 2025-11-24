import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

describe("missionForward.submit", () => {
  it("successfully submits a valid Mission Forward application", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const applicationData = {
      fullName: "John Doe",
      email: "john.doe@example.com",
      phone: "555-123-4567",
      applicantType: "veteran" as const,
      age: 28,
      location: "Atlanta, GA",
      housingPreference: "georgia" as const,
      techExperience: "Basic computer skills, interested in learning more",
      careerGoals: "Want to transition into tech industry",
      additionalInfo: "Honorably discharged from US Army",
    };

    const result = await caller.missionForward.submit(applicationData);

    expect(result).toEqual({ success: true });
  });

  it("validates required fields for Mission Forward application", async () => {
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
      fullName: "",
      email: "invalid-email",
      phone: "",
      applicantType: "veteran" as const,
    };

    await expect(
      caller.missionForward.submit(invalidData as any)
    ).rejects.toThrow();
  });
});

describe("grantflow.joinWaitlist", () => {
  it("successfully adds organization to Grantflow waitlist", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const waitlistData = {
      organizationName: "Community Foundation",
      contactName: "Jane Smith",
      email: "jane@communityfoundation.org",
      phone: "555-987-6543",
      organizationType: "501(c)(3)",
      numberOfStaff: 15,
      currentGrantProcess: "Manual process using spreadsheets",
      interests: "Automated grant identification and submission",
    };

    const result = await caller.grantflow.joinWaitlist(waitlistData);

    expect(result).toEqual({ success: true });
  });

  it("validates required fields for Grantflow waitlist", async () => {
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
      organizationName: "",
      contactName: "Jane Smith",
      email: "invalid-email",
    };

    await expect(
      caller.grantflow.joinWaitlist(invalidData as any)
    ).rejects.toThrow();
  });
});
