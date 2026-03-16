import { query } from "../_generated/server";
import { v } from "convex/values";

export const getByID = query({
  args: { id: v.id("users") },
  handler: async ({ db }, { id }) => {
    const user = await db.get("users", id);
    if (!user) throw new Error("USER_NOT_FOUND");
    return { id: user._id, email: user.email, name: user.name, scanned: user.scanned ?? false, status: user.status };
  },
});