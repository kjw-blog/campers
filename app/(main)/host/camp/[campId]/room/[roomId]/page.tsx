import { redirect } from 'next/navigation';

import { db } from '@/lib/db';
import { Content } from '@/components/host/room/content';
import { Header } from '@/components/host/room/header';

export default async function RoomIdPage({
  params,
}: {
  params: { campId: string; roomId: string };
}) {
  const room = await db.room.findUnique({
    where: {
      id: params.roomId,
      campId: params.campId,
    },
  });

  if (!room) {
    return redirect('/');
  }

  return (
    <div className="h-full w-full flex-col">
      <Header campId={params.campId} room={room} />
      <Content />
    </div>
  );
}
