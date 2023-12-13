import { redirect } from 'next/navigation';

import { HostRoomContent } from '@/components/host/host-room-content';
import { HostRoomHeader } from '@/components/host/host-room-header';
import { db } from '@/lib/db';

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
      <HostRoomHeader campId={params.campId} room={room} />
      <HostRoomContent />
    </div>
  );
}
