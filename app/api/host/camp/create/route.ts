import { NextResponse } from 'next/server';

import { currentUser } from '@/lib/current-user';

export async function POST(req: Request) {
  try {
    const user = await currentUser();

    if (!user || user.type === 'GUEST') {
      return new NextResponse('권한 없음', { status: 401 });
    }

    const request = await req.json();

    return NextResponse.json('');
  } catch (error) {
    console.log('HOST_CAMP_CREATE_ERROR', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
