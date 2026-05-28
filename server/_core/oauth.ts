import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
import type { Express, Request, Response } from "express";
import * as db from "../db";
import { getSessionCookieOptions } from "./cookies";
import { sdk } from "./sdk";
import { ENV } from "./env";
import { nanoid } from "nanoid";

export function registerOAuthRoutes(app: Express) {
  // Simple admin login endpoint
  app.post("/api/auth/login", async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!ENV.adminEmail || !ENV.adminPassword) {
      res.status(500).json({ error: "Admin credentials not configured" });
      return;
    }

    if (email !== ENV.adminEmail || password !== ENV.adminPassword) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    try {
      const openId = `admin_${nanoid(10)}`;

      await db.upsertUser({
        openId,
        name: "Admin",
        email,
        loginMethod: "email",
        lastSignedIn: new Date(),
      });

      // Check if user already exists by email
      const existingUser = await db.getUserByEmail?.(email);
      const userId = existingUser?.openId || openId;

      const sessionToken = await sdk.createSessionToken(userId, {
        name: "Admin",
        expiresInMs: ONE_YEAR_MS,
      });

      const cookieOptions = getSessionCookieOptions(req);
      res.cookie(COOKIE_NAME, sessionToken, { ...cookieOptions, maxAge: ONE_YEAR_MS });

      res.json({ success: true });
    } catch (error) {
      console.error("[Auth] Login failed", error);
      res.status(500).json({ error: "Login failed" });
    }
  });
}
