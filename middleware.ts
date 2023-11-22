import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { UserType } from '@prisma/client';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = await getToken({ req: request });

  if (!token) {
    if (pathname !== '/login' && pathname !== '/signup') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  } else {
    const type = token.type as UserType;
    if (pathname === '/login' || pathname === '/signup') {
      return NextResponse.redirect(new URL('/', request.url));
    }

    if (pathname === '/') {
      return NextResponse.redirect(
        new URL(`/${type.toLowerCase()}`, request.url),
      );
    }

    if (pathname.startsWith('/host') && type === 'GUEST') {
      return NextResponse.redirect(new URL('/guest', request.url));
    }

    if (pathname.startsWith('/guest') && type === 'HOST') {
      return NextResponse.redirect(new URL('/host', request.url));
    }
  }
}

// // See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/login', '/signup', '/host/:path*', '/guest/:path*'],
};
