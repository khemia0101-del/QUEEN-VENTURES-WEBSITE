import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAdminContext(): { ctx: TrpcContext } {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "admin-user",
    email: "admin@example.com",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return { ctx };
}

describe("newsletterEdition.generate", () => {
  it.skip("generates AI newsletter content successfully", async () => {
    const { ctx } = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.newsletterEdition.generate({
      topic: "AI automation in cloud computing",
    });

    expect(result).toHaveProperty("title");
    expect(result).toHaveProperty("subject");
    expect(result).toHaveProperty("content");
    expect(typeof result.title).toBe("string");
    expect(result.title.length).toBeGreaterThan(0);
    expect(typeof result.subject).toBe("string");
    expect(result.subject.length).toBeGreaterThan(0);
    expect(result.subject.length).toBeLessThanOrEqual(50);
    expect(typeof result.content).toBe("string");
    expect(result.content.length).toBeGreaterThan(100);
  }, 30000); // 30 second timeout for LLM

  it("requires admin role to generate newsletter", async () => {
    const user: AuthenticatedUser = {
      id: 2,
      openId: "regular-user",
      email: "user@example.com",
      name: "Regular User",
      loginMethod: "manus",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    };

    const ctx: TrpcContext = {
      user,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.newsletterEdition.generate({})
    ).rejects.toThrow("Unauthorized");
  });
});

describe("newsletterEdition.getPublished", () => {
  it("retrieves published newsletters", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const newsletters = await caller.newsletterEdition.getPublished();

    expect(Array.isArray(newsletters)).toBe(true);
    // All returned newsletters should have status "sent"
    newsletters.forEach(newsletter => {
      expect(newsletter.status).toBe("sent");
    });
  });
});
