import { redirect } from 'next/navigation';

import { db } from '@/lib/db';
import { Separator } from '@/components//ui/separator';
import { CampHeader } from './camp-header';
import { SearchButton } from './search-button';
import { currentUser } from '@/lib/current-user';
import { DashboardButton } from './dashboard-button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RoomLink } from './room/room-link';

export const CampSidebar = async ({ campId }: { campId: string }) => {
  const user = await currentUser();

  if (!user) return redirect('/');

  const camp = await db.campground.findUnique({
    where: {
      id: campId,
      user: {
        id: user.id,
      },
    },
    include: {
      room: true,
    },
  });

  if (!camp) {
    redirect('/');
  }

  return (
    <div className="flex h-full w-full flex-col bg-[#F2F3F5] text-primary dark:bg-dark-300">
      <CampHeader camp={camp!} />
      <SearchButton campId={campId} room={camp.room} />
      <Separator className="rounded-md bg-zinc-200 dark:bg-zinc-700" />
      <DashboardButton campId={campId} />
      <Separator className="rounded-md bg-zinc-200 dark:bg-zinc-700" />
      <ScrollArea className="flex-[1_0]">
        {camp?.room.map((item) => (
          <RoomLink key={item.id} room={item} campId={campId} />
        ))}
      </ScrollArea>
    </div>
  );
};
