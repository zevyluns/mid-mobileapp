import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const verifyCredentials = mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },

  handler: async ({ db }, { email, password }) => {
    const user = await db
      .query("users")
      .filter((q) => q.eq(q.field("email"), email))
      .first();

    if (!user || user.password !== password) {
      throw new Error("INVALID_CREDENTIALS");
    }

    if (user.status !== 0) {
      throw new Error("NOT_ALLOWED_STATUS");
    }

    return {
      id: user._id,
      email: user.email,
      name: user.name,
      scanned: user.scanned,
    };
  },
});