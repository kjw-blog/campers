import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavigationSidebar } from './navigation-sidebar';
import { CampSidebar } from './camp-sidebar';

export const HostHeader = ({ campId }: { campId: string }) => {
  return (
    <div className="text-md flex h-12 items-center border-b-2 border-neutral-200 px-3 font-semibold dark:border-neutral-800">
      <Sheet>
        <SheetTrigger asChild>
          <button className="md:hidden">
            <Menu />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="flex gap-0 p-0">
          <div className="w-[72px]">
            <NavigationSidebar />
          </div>
          <CampSidebar campId={campId} />
        </SheetContent>
      </Sheet>
    </div>
  );
};
