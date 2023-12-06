import { db } from '@/lib/db';
import { CampHeader } from './camp-header';

export const CampSidebar = async ({ campId }: { campId: string }) => {
  const camp = await db.campground.findUnique({
    where: {
      id: campId,
    },
  });

  return (
    <div className="flex h-full w-full flex-col bg-[#F2F3F5] text-primary dark:bg-dark-300">
      <CampHeader camp={camp!} />
    </div>
  );
};
