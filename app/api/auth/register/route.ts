import { NextResponse } from 'next/server';
import * as bcrypt from 'bcrypt';

import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { userId, email, name, userPw, type } = await req.json();

    const verification = await db.user.findFirst({
      where: {
        OR: [{ userId }, { email }],
      },
    });

    if (verification) {
      verification.userId;

      const error = {
        ...(verification.userId === userId && {
          userId: '이미 가입된 아이디입니다.',
        }),
        ...(verification.email === email && {
          email: '이미 가입된 이메일입니다.',
        }),
      };

      return NextResponse.json(error, { status: 409 });
    }

    const user = await db.user.create({
      data: {
        name,
        email,
        userId,
        password: await bcrypt.hash(userPw, 10),
        type,
      },
    });

    return NextResponse.json(user);
  } catch (e) {
    console.log('AUTH_REGISTER_ERROR', e);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
