import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Mission Forward program applications
 * Stores information from foster youth and veterans applying to the 180-day program
 */
export const missionForwardApplications = mysqlTable("mission_forward_applications", {
  id: int("id").autoincrement().primaryKey(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  applicantType: mysqlEnum("applicant_type", ["foster_youth", "veteran"]).notNull(),
  age: int("age"),
  location: varchar("location", { length: 255 }),
  housingPreference: mysqlEnum("housing_preference", ["georgia", "hawaii", "either"]),
  techExperience: text("tech_experience"),
  careerGoals: text("career_goals"),
  additionalInfo: text("additional_info"),
  status: mysqlEnum("status", ["pending", "reviewed", "accepted", "rejected"]).default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export type MissionForwardApplication = typeof missionForwardApplications.$inferSelect;
export type InsertMissionForwardApplication = typeof missionForwardApplications.$inferInsert;

/**
 * Grantflow waitlist sign-ups
 * Stores information from organizations interested in the Grantflow software
 */
export const grantflowWaitlist = mysqlTable("grantflow_waitlist", {
  id: int("id").autoincrement().primaryKey(),
  organizationName: varchar("organization_name", { length: 255 }).notNull(),
  contactName: varchar("contact_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  organizationType: varchar("organization_type", { length: 100 }),
  numberOfStaff: int("number_of_staff"),
  currentGrantProcess: text("current_grant_process"),
  interests: text("interests"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type GrantflowWaitlistEntry = typeof grantflowWaitlist.$inferSelect;
export type InsertGrantflowWaitlistEntry = typeof grantflowWaitlist.$inferInsert;