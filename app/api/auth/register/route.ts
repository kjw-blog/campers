import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { userId, email } = await req.json();

    const idVerification = await db.user.findFirst({
      where: {
        userId,
      },
      select: {
        id: true,
      },
    });

    const emailVerification = await db.user.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });

    if (idVerification || emailVerification) {
      const error = {
        ...(!!idVerification && { userId: '이미 가입된 아이디입니다.' }),
        ...(!!emailVerification && { email: '이미 가입된 이메일입니다.' }),
      };

      return NextResponse.json(error, { status: 409 });
    }

    return NextResponse.json('');
  } catch (e) {
    console.log('AUTH_REGISTER_ERROR', e);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
