import { Room } from '@prisma/client';
import { Edit, Trash2 } from 'lucide-react';
import { TooltipWrapper } from '../common/tooltip-wrapper';

interface RoomItemProps {
  room: Room;
}

export const RoomItem = ({ room }: RoomItemProps) => {
  return (
    <div className="group flex h-12 w-60 cursor-pointer select-none items-center space-x-2 overflow-hidden border-b-[1px] border-zinc-400 px-3 transition hover:bg-zinc-700/10 dark:border-zinc-700 dark:hover:bg-zinc-700/50 ">
      <span className="block flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
        {room.name}
      </span>
      <div className="ml-auto hidden space-x-2 group-hover:flex">
        <TooltipWrapper label="객실명 수정" side="top">
          <Edit className="h-4 w-4" />
        </TooltipWrapper>
        <TooltipWrapper label="객실 삭제" side="top">
          <Trash2 className="h-4 w-4" />
        </TooltipWrapper>
      </div>
    </div>
  );
};
