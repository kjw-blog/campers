import { Search } from 'lucide-react';

import { db } from '@/lib/db';
import { CampHeader } from './camp-header';
import { Separator } from '@/components//ui/separator';

export const CampSidebar = async ({ campId }: { campId: string }) => {
  const camp = await db.campground.findUnique({
    where: {
      id: campId,
    },
  });

  return (
    <div className="flex h-full w-full flex-col bg-[#F2F3F5] text-primary dark:bg-dark-300">
      <CampHeader camp={camp!} />
      <button className="text-md group  flex h-12 w-full items-center px-3 transition hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50">
        <div className="flex items-center space-x-1">
          <Search className="h-4 w-4" />
          <span className="text-sm font-bold">객실 검색</span>
        </div>
        <kbd className="ml-auto rounded-sm bg-dark-100 px-1 py-[2px] text-[10px] text-zinc-700 dark:bg-dark-400 dark:text-zinc-400">
          Ctrl+k
        </kbd>
      </button>
      <Separator className="mb-2 rounded-md bg-zinc-200 dark:bg-zinc-700" />
    </div>
  );
};
