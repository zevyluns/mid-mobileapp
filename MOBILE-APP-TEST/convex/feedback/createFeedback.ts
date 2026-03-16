import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const createFeedback = mutation({
  args: {
    userId: v.id("users"),
    text: v.string(),
  },

  handler: async (ctx, args) => {
    const { userId, text } = args;

    // Prevent empty feedback
    if (!text.trim()) {
      throw new Error("EMPTY_FEEDBACK");
    }

    // Get user from database to retrieve email
    const user = await ctx.db.get(userId);

    if (!user) {
      throw new Error("USER_NOT_FOUND");
    }

    // Insert feedback into existing "feedback" table
    const feedbackId = await ctx.db.insert("feedback", {
      userId: userId,
      email: user.email,
      text: text.trim(),
      createdAt: Date.now(),
    });

    return {
      ok: true,
      id: feedbackId,
    };
  },
});