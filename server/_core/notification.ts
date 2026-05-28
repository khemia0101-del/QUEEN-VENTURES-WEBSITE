import { TRPCError } from "@trpc/server";

export type NotificationPayload = {
  title: string;
  content: string;
};

/**
 * Simple notification handler - logs to console.
 * Replace with email/Slack integration as needed.
 */
export async function notifyOwner(
  payload: NotificationPayload
): Promise<boolean> {
  if (!payload.title?.trim() || !payload.content?.trim()) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Notification title and content are required.",
    });
  }

  console.log(`[Notification] ${payload.title}: ${payload.content}`);
  return true;
}
