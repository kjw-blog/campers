'use client';

import { Room } from '@prisma/client';
import { Edit, Trash2 } from 'lucide-react';
import { TooltipWrapper } from '../common/tooltip-wrapper';
import { useModalStore } from '@/store/use-modal-store';

interface RoomItemProps {
  room: Room;
  campId: string;
}

export const RoomItem = ({ room, campId }: RoomItemProps) => {
  const { openModal } = useModalStore();

  return (
    <div className="group flex h-12 w-[322px] cursor-pointer  select-none items-center space-x-2 overflow-hidden border-b-[1px] border-zinc-400 px-3 transition hover:bg-zinc-700/10 dark:border-zinc-700 dark:hover:bg-zinc-700/50 md:w-60 ">
      <span className="block flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
        {room.name}
      </span>
      <div className="ml-auto hidden space-x-2 group-hover:flex">
        <TooltipWrapper label="객실명 수정" side="top">
          <Edit
            className="h-4 w-4 transition hover:stroke-camp-heavy"
            onClick={() =>
              openModal('room-manage', { campId, room, title: '객실명 수정' })
            }
          />
        </TooltipWrapper>
        <TooltipWrapper label="객실 삭제" side="top">
          <Trash2
            className="h-4 w-4 transition hover:stroke-rose-500"
            onClick={() => openModal('room-delete', { campId, room })}
          />
        </TooltipWrapper>
      </div>
    </div>
  );
};
