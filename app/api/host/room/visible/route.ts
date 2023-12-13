import { NextResponse } from 'next/server';

import { currentUser } from '@/lib/current-user';
import { db } from '@/lib/db';

export async function PATCH(req: Request) {
  try {
    const user = await currentUser();

    if (!user || user.type !== 'HOST') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { searchParams } = new URL(req.url);

    const campId = searchParams.get('campId');
    const roomId = searchParams.get('roomId');

    if (!campId) {
      return new NextResponse('Camp Id Missing', { status: 400 });
    }
    if (!roomId) {
      return new NextResponse('Room Id Missing', { status: 400 });
    }

    const findRoom = await db.room.findFirst({
      where: {
        id: roomId,
        campId,
      },
    });

    if (!findRoom) {
      return new NextResponse('Room Missing', { status: 400 });
    }

    const room = await db.room.update({
      where: {
        id: roomId,
        campId,
      },
      data: {
        isVisible: !findRoom.isVisible,
      },
    });

    return NextResponse.json(room.isVisible);
  } catch (error) {
    console.log('ROOM_VISIBLE_TOGGLE_ERROR', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
