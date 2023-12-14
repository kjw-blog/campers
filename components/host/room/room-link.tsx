'use client';

import { useParams, useRouter } from 'next/navigation';
import { Room } from '@prisma/client';
import { Edit, Trash2 } from 'lucide-react';

import { TooltipWrapper } from '../../common/tooltip-wrapper';
import { useModalStore } from '@/store/use-modal-store';
import { cn } from '@/lib/utils';

interface RoomLinkProps {
  room: Room;
  campId: string;
}

export const RoomLink = ({ room, campId }: RoomLinkProps) => {
  const { openModal } = useModalStore();
  const params = useParams();
  const router = useRouter();

  const onClick = () => {
    router.push(`/host/camp/${campId}/room/${room.id}`);
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        'group flex h-12 w-full cursor-pointer  select-none items-center space-x-2 overflow-hidden border-b-[1px] border-zinc-400 px-3 transition dark:border-zinc-700  md:w-60 ',
        params.roomId === room.id
          ? 'bg-zinc-700/10 dark:bg-zinc-700/50'
          : 'hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50',
      )}
    >
      <span className="block flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
        {room.name}
      </span>
      <div className="ml-auto hidden space-x-2 group-hover:flex">
        <TooltipWrapper label="객실명 수정" side="top">
          <Edit
            className="h-4 w-4 transition hover:stroke-camp-heavy"
            onClick={(e) => {
              e.stopPropagation();
              openModal('room-manage', { campId, room, title: '객실명 수정' });
            }}
          />
        </TooltipWrapper>
        <TooltipWrapper label="객실 삭제" side="top">
          <Trash2
            className="h-4 w-4 transition hover:stroke-rose-500"
            onClick={(e) => {
              e.stopPropagation();
              openModal('room-delete', { campId, room });
            }}
          />
        </TooltipWrapper>
      </div>
    </div>
  );
};
