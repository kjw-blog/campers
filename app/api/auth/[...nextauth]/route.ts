import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import * as bcrypt from 'bcrypt';
import { UserType } from '@prisma/client';
import { AdapterUser } from 'next-auth/adapters';

import { db } from '@/lib/db';

interface CustomUser extends AdapterUser {
  type: UserType;
}

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
        if (!credentials?.password || !credentials.userId) return null;

        const user = await db.user.findUnique({
          where: {
            userId: credentials?.userId,
          },
        });

        if (!user) return null;

        if (!(await bcrypt.compare(credentials.password, user.password)))
          return null;

        return user;
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
    async jwt({ token, user }) {
      const customUser = user as CustomUser;

      if (customUser) {
        token.type = customUser.type;
      }

      return token;
    },
    async session({ session, token }) {
      return { ...session, ...token };
    },
  },
});

export { handler as GET, handler as POST };
