import { Room } from '@prisma/client';

import { MobileToggle } from '../mobile-toggle';
import { VisibleToggleButton } from '../visbile-toggle-button';

interface HeaderProps {
  campId: string;
  room: Room;
}

export const Header = ({ campId, room }: HeaderProps) => {
  return (
    <header className="text-md flex h-12 items-center border-b-2 border-neutral-200 px-3 font-semibold dark:border-neutral-800">
      <MobileToggle campId={campId} />
      <VisibleToggleButton room={room} campId={campId} />
    </header>
  );
};
