import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: {
    clerkId: v.string(),
    username: v.string(),
    imageUrl: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .unique();
    if (existingUser) return existingUser;
    return await ctx.db.insert("users", {
      clerkId: args.clerkId,
      imageUrl: args.imageUrl,
      username: args.username,
      email: args.email,
      createdAt: Date.now(),
    });
  },
});
