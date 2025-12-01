import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

describe("chat.sendMessage", () => {
  it("successfully sends a message and gets AI response", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const sessionId = `test-session-${Date.now()}`;
    const testMessage = "What is Mission Forward?";

    const result = await caller.chat.sendMessage({
      sessionId,
      message: testMessage,
    });

    expect(result).toHaveProperty("message");
    expect(typeof result.message).toBe("string");
    expect(result.message.length).toBeGreaterThan(0);
    // The response should mention Mission Forward
    expect(result.message.toLowerCase()).toContain("mission forward");
  }, 30000); // 30 second timeout for LLM response

  it("validates empty message", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const sessionId = `test-session-${Date.now()}`;

    await expect(
      caller.chat.sendMessage({
        sessionId,
        message: "",
      })
    ).rejects.toThrow();
  });
});

describe("chat.getHistory", () => {
  it("retrieves conversation history", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const sessionId = `test-session-${Date.now()}`;

    // Send a message first
    await caller.chat.sendMessage({
      sessionId,
      message: "Hello",
    });

    // Get history
    const history = await caller.chat.getHistory({ sessionId });

    expect(Array.isArray(history)).toBe(true);
    expect(history.length).toBeGreaterThanOrEqual(2); // User message + assistant response
    expect(history[0]?.role).toBe("user");
    expect(history[0]?.content).toBe("Hello");
    expect(history[1]?.role).toBe("assistant");
  }, 30000);
});
