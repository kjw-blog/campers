import { NextResponse } from 'next/server';

import { currentUser } from '@/lib/current-user';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const user = await currentUser();

    if (!user || user.type === 'GUEST') {
      return new NextResponse('권한 없음', { status: 401 });
    }

    const request = await req.json();
    const { address, detailAddress, call, name, thumbnail } = request;

    const newCamp = await db.campground.create({
      data: {
        userId: user.id,
        address,
        detailAddress,
        call,
        name,
        image: thumbnail,
      },
    });

    return NextResponse.json(newCamp);
  } catch (error) {
    console.log('HOST_CAMP_CREATE_ERROR', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
