import { HostRoomHeader } from '@/components/host/host-room-header';
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';

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

  return <HostRoomHeader campId={params.campId} room={room} />;
}
