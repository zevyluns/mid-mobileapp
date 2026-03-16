import { query } from "../_generated/server";

export const getAll = query({
  handler: async ({ db }) => {
    const docs = await db.query("menu").collect();

    return docs.map((d) => ({
      id: d._id,
      day: d.day,
      text: d.text,
    }));
  },
});