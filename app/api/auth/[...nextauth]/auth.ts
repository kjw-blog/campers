import { PrismaAdapter } from '@auth/prisma-adapter';
import { AuthOptions } from 'next-auth';
import * as bcrypt from 'bcrypt';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

import { db } from '@/lib/db';

const SESSION_MAX_AGE_THREE_DAYS = 60 * 60 * 24 * 3;
const SESSION_UPDATE_AGE_ONE_DAYS = 60 * 60 * 24;

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: 'login',
      credentials: {
        userId: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.password || !credentials.userId)
          throw new Error('아이디, 비밀번호를 입력해 주세요.');

        const user = await db.user.findUnique({
          where: {
            userId: credentials?.userId,
          },
        });

        if (!user) throw new Error('존재하지 않는 아이디입니다.');

        if (!(await bcrypt.compare(credentials.password, user.password)))
          throw new Error('비밀번호가 일치하지 않습니다.');

        if (user.userId !== 'host123') {
          const geolocation = await axios.get(
            'https://geolocation-db.com/json/',
          );

          await db.user.update({
            where: {
              id: user.id,
            },
            data: {
              loginHistory: {
                create: {
                  ip: geolocation.data.IPv4,
                },
              },
            },
          });
        }

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
      return { ...token, ...user };
    },
    async session({ session, token }) {
      const { password, ...tokenData } = token;

      return { ...session, ...tokenData };
    },
  },
};
