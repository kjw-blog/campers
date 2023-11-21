import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { UserType } from '@prisma/client';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = await getToken({ req: request });

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (pathname === '/') {
    const type = token.type as UserType;

    return NextResponse.redirect(
      new URL(`/${type.toLowerCase()}`, request.url),
    );
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/'],
};
