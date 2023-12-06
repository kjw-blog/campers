import { redirect } from 'next/navigation';

import { db } from '@/lib/db';
import { currentUser } from '@/lib/current-user';
import { UserProfile } from '@/components/user-profile';
import { ThemeButton } from '@/components/common/theme-button';
import { NavigationItem } from '@/components/host/navigation-item';
import { NavigationAction } from '@/components/host/navigation-action';

export const NavigationSidebar = async () => {
  const user = await currentUser();

  if (!user || user.type === 'GUEST') {
    redirect('/');
  }

  const campList = await db.campground.findMany({
    where: {
      user: {
        id: user.id,
      },
    },
  });

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-camp-heavy py-4 transition dark:bg-dark-400">
      <NavigationAction />
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
