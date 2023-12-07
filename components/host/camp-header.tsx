'use client';

import { Campground } from '@prisma/client';
import { ChevronDown, TentTree, Trash2 } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useModalStore } from '@/store/use-modal-store';

interface CampHeaderProps {
  camp: Campground;
}

export const CampHeader = ({ camp }: CampHeaderProps) => {
  const { openModal } = useModalStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="focus:outline-none">
        <button className="text-md flex h-12 w-full select-none items-center justify-start space-x-1 border-b-2 border-neutral-200 px-3 font-semibold transition hover:bg-zinc-700/10 dark:border-neutral-800 dark:hover:bg-zinc-700/50">
          <span className="block flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left">
            {camp.name}
          </span>
          <ChevronDown className="ml-auto h-5 w-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 space-y-[2px] text-xs font-medium text-black dark:text-neutral-400">
        <DropdownMenuItem
          onClick={() => openModal('create-room', { campId: camp.id })}
          className="cursor-pointer px-3 py-2 text-sm text-camp-heavy"
        >
          객실 추가
          <TentTree className="ml-auto h-4 w-4" />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer px-3 py-2 text-sm text-rose-500 hover:text-rose-500">
          캠핑장 삭제
          <Trash2 className="ml-auto h-4 w-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
