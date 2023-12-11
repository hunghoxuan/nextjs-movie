import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma";
import { userService } from "./services/user.db";
import { getServerSession } from "next-auth";
import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { unstable_noStore } from "next/cache";
import { DefaultSession } from "next-auth";

/* eslint-disable */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
  } 
}

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "username@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = userService.authenticate(credentials.email, credentials.password);
        return user;
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET_ID as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  
  callbacks: {
    async jwt({ token, account }) { 
      if (account && account.type === "credentials") {
        token.userId = account.providerAccountId; // this is Id that coming from authorize() callback 
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.userId;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
  },
} satisfies NextAuthOptions;

// Use it in server contexts
export async function getAuth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  unstable_noStore();
  const session = await getServerSession(...args, authOptions);

  return { 
    user: session?.user && { 
      id: session.user.id,
      userId: session.user.id,
      name: session.user.name, 
      email: session.user.email, 
      image: session.user.image 
    },
    session: session,
  };
}
