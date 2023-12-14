import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { NavigationSidebar } from './navigation-sidebar';
import { CampSidebar } from './camp-sidebar';

export const MobileToggle = ({ campId }: { campId: string }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden">
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="flex gap-0 p-0 md:hidden">
        <div className="w-[72px]">
          <NavigationSidebar />
        </div>
        <CampSidebar campId={campId} />
      </SheetContent>
    </Sheet>
  );
};
