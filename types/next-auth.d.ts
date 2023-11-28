import { User } from '@prisma/client';
import NextAuth, { JWT } from 'next-auth';

declare module 'next-auth' {
  interface Session extends User {}
}
