import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export const authOptions = {
	// adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.AUTH_GOOGLE_ID || "",
			clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
		}),
		GithubProvider({
			clientId: process.env.AUTH_GITHUB_ID || "",
			clientSecret: process.env.AUTH_GITHUB_SECRET || "",
		}),
	],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
export default handler;
