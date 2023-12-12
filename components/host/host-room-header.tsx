import { Room } from '@prisma/client';
import { MobileToggle } from './mobile-toggle';

interface HostRoomHeaderProps {
  campId: string;
  room: Room;
}

export const HostRoomHeader = ({ campId, room }: HostRoomHeaderProps) => {
  return (
    <header className="text-md flex h-12 items-center border-b-2 border-neutral-200 px-3 font-semibold dark:border-neutral-800">
      <MobileToggle campId={campId} />
      <div className="flex justify-between pl-2 md:pl-0">
        <span>{room.name}</span>
      </div>
    </header>
  );
};
