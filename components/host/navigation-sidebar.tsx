import { Plus } from 'lucide-react';
import { redirect } from 'next/navigation';

import { db } from '@/lib/db';
import { currentUser } from '@/lib/current-user';
import { UserProfile } from '@/components/user-profile';
import { ThemeButton } from '@/components/common/theme-button';
import { NavigationItem } from '@/components/host/navigation-item';
import { TooltipWrapper } from '../common/tooltip-wrapper';

export const NavigationSidebar = async () => {
  const user = await currentUser();

  if (!user || user.type === 'GUEST') {
    redirect('/');
  }

  const campList = await db.campground.findMany({
    where: {
      userId: user.id,
    },
  });

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-camp-heavy py-4 transition dark:bg-dark-400">
      <TooltipWrapper label="캠핑장 추가">
        <button className="group flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white shadow-md transition hover:bg-camp-middle">
          <Plus className="stroke-camp-heavy transition group-hover:stroke-white" />
        </button>
      </TooltipWrapper>
      <div className="my-2 h-[2px] w-[48px] bg-zinc-500 dark:bg-camp-heavy" />
      <div className="w-full flex-1">
        {campList.map((camp) => (
          <div key={camp.id} className="mb-4">
            <NavigationItem camp={camp} />
          </div>
        ))}
      </div>
      <div className="mt-2 flex flex-col items-center justify-center space-y-4">
        <ThemeButton />
        <UserProfile />
      </div>
    </div>
  );
};
