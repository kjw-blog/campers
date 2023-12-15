import { NextResponse } from 'next/server';

import { currentUser } from '@/lib/current-user';
import { db } from '@/lib/db';

export async function PATCH(req: Request) {
  try {
    const user = await currentUser();

    const { searchParams } = new URL(req.url);
    const {
      additionalPrice,
      maximumGuestNumber,
      baseGuestNumber,
      offSeasonPrice,
      peakSeasonPrice,
      semiPeakSeasonPrice,
    } = await req.json();

    const campId = searchParams.get('campId');
    const roomId = searchParams.get('roomId');

    if (!user || user.type === 'GUEST') {
      return new NextResponse('권한 없음', { status: 401 });
    }

    if (!campId) {
      return new NextResponse('Camp Id Missing', { status: 400 });
    }
    if (!roomId) {
      return new NextResponse('Room Id Missing', { status: 400 });
    }

    const room = await db.room.update({
      where: {
        id: roomId,
        campId,
      },
      data: {
        additionalPrice,
        maximumGuestNumber,
        baseGuestNumber,
        offSeasonPrice,
        peakSeasonPrice,
        semiPeakSeasonPrice,
      },
    });

    return NextResponse.json(room);
  } catch (error) {
    console.log('ROOM_OPTIONS_PATCH_ERROR', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
