import NextAuth, { AuthOptions } from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';
import { PrismaAdapter } from '@auth/prisma-adapter';

const SESSION_MAX_AGE_THREE_DAYS = 60 * 60 * 24 * 3;
const SESSION_UPDATE_AGE_ONE_DAYS = 60 * 60 * 24;

const handler = NextAuth({
  // prisma client 들어갈곳
  adapter: PrismaAdapter(''),
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || '',
      clientSecret: process.env.NAVER_CLIENT_ID || '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: SESSION_MAX_AGE_THREE_DAYS,
    updateAge: SESSION_UPDATE_AGE_ONE_DAYS,
  },
  jwt: {},
});

export { handler as GET, handler as POST };
