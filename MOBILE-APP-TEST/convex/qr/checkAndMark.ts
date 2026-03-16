import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const checkAndMark = mutation({
  args: {
    userId: v.id("users"),
    scannedCode: v.string(),
  },

  handler: async ({ db }, { userId, scannedCode }) => {

    const qrDocs = await db.query("qrcode").collect();
    const qr = qrDocs[0];

    if (!qr) throw new Error("NO_QR_STORED");

    if (qr.code !== scannedCode) {
      throw new Error("QR_MISMATCH");
    }

    const user = await db.get(userId);

    if (!user) throw new Error("USER_NOT_FOUND");

    if (user.scanned === true) {
      throw new Error("ALREADY_SCANNED");
    }

    await db.patch(userId, { scanned: true });

    return { ok: true };
  },
});