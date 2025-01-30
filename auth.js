import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma/prisma.js";
import authConfig from "./auth.config.js";

// Debugging logs
console.log("authConfig:", authConfig);
//console.log("prisma:", prisma);

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(prisma),
  ...authConfig,
})