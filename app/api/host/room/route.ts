import { currentUser } from '@/lib/current-user';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const user = await currentUser();

    if (!user || user.type !== 'HOST') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { name } = await req.json();
    const { searchParams } = new URL(req.url);

    const campId = searchParams.get('campId');

    if (!campId) {
      return new NextResponse('Camp Id Missing', { status: 400 });
    }

    const trimName: string = name.trim();

    const room = await db.room.findFirst({
      where: {
        campId,
        name: trimName,
      },
    });

    if (room) {
      return new NextResponse('중복된 객실명입니다.', { status: 400 });
    }

    const camp = await db.campground.update({
      where: {
        id: campId,
        user: {
          id: user.id,
        },
      },
      data: {
        room: {
          create: {
            name: trimName,
          },
        },
      },
    });

    return NextResponse.json(camp);
  } catch (error) {
    console.log('HOST_ROOM_CREATE_ERROR', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const user = await currentUser();

    if (!user || user.type !== 'HOST') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { name } = await req.json();
    const { searchParams } = new URL(req.url);

    const campId = searchParams.get('campId');
    const roomId = searchParams.get('roomId');

    if (!campId) {
      return new NextResponse('Camp Id Missing', { status: 400 });
    }
    if (!roomId) {
      return new NextResponse('Room Id Missing', { status: 400 });
    }

    const trimName: string = name.trim();

    const room = await db.room.findFirst({
      where: {
        campId,
        name: trimName,
        NOT: {
          id: roomId,
        },
      },
    });

    if (room) {
      return new NextResponse('중복된 객실명입니다.', { status: 400 });
    }

    const camp = await db.campground.update({
      where: {
        id: campId,
        user: {
          id: user.id,
        },
      },
      data: {
        room: {
          update: {
            where: {
              id: roomId,
            },
            data: {
              name,
            },
          },
        },
      },
    });

    return NextResponse.json(camp);
  } catch (error) {
    console.log('HOST_ROOM_NAME_UPDATE_ERROR', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const user = await currentUser();

    const { searchParams } = new URL(req.url);
    const campId = searchParams.get('campId');
    const roomId = searchParams.get('roomId');

    if (!user || user.type !== 'HOST') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!campId) {
      return new NextResponse('Camp Id Missing', { status: 400 });
    }
    if (!roomId) {
      return new NextResponse('Room Id Missing', { status: 400 });
    }

    const camp = await db.campground.update({
      where: {
        id: campId,
        user: {
          id: user.id,
        },
      },
      data: {
        room: {
          delete: {
            id: roomId,
          },
        },
      },
    });

    return NextResponse.json(camp);
  } catch (error) {
    console.log('HOST_ROOM_DELETE_ERROR', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
