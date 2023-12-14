import { LayoutDashboard } from 'lucide-react';
import { MobileToggle } from '../mobile-toggle';

export const Header = ({ campId }: { campId: string }) => {
  return (
    <header className="text-md flex h-12 items-center border-b-2 border-neutral-200 px-3 font-semibold dark:border-neutral-800">
      <MobileToggle campId={campId} />
      <div className="ml-auto flex select-none items-center space-x-2 md:ml-0">
        <LayoutDashboard className="h-4 w-4" />
        <span>대시보드</span>
      </div>
    </header>
  );
};
