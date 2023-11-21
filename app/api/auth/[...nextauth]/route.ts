import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import * as bcrypt from 'bcrypt';

import { db } from '@/lib/db';

const SESSION_MAX_AGE_THREE_DAYS = 60 * 60 * 24 * 3;
const SESSION_UPDATE_AGE_ONE_DAYS = 60 * 60 * 24;

const handler = NextAuth({
  // prisma client 들어갈곳
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: 'login',
      credentials: {
        userId: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await db.user.findUnique({
          where: {
            userId: credentials?.userId,
          },
        });

        if (
          user &&
          credentials?.password &&
          (await bcrypt.compare(credentials.password, user.password))
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
    newUser: '/signup',
  },
  session: {
    strategy: 'jwt',
    maxAge: SESSION_MAX_AGE_THREE_DAYS,
    updateAge: SESSION_UPDATE_AGE_ONE_DAYS,
  },
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        // token.type = user.type;
      }

      return token;
    },
    async session({ session, token }) {
      (session as any).token = token;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
