'use client';

import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Room } from '@prisma/client';
import { useRouter } from 'next/navigation';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

interface SearchButtonProps {
  room: Room[];
  campId: string;
}

export const SearchButton = ({ room, campId }: SearchButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onClick = (roomId: string) => {
    if (roomId === 'dashboard') {
      router.push(`/host/camp/${campId}/dashboard`);
    } else {
      router.push(`/host/camp/${campId}/room/${roomId}`);
    }

    setIsOpen(false);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-md group flex h-12 w-full select-none items-center px-3 transition hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50"
      >
        <div className="flex items-center space-x-1">
          <Search className="h-4 w-4" />
          <span className="text-sm font-bold">객실 검색</span>
        </div>
        <kbd className="ml-auto rounded-sm bg-dark-100 px-1 py-[2px] text-[10px] text-zinc-700 dark:bg-dark-400 dark:text-zinc-400">
          Ctrl + K
        </kbd>
      </button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="검색하실 객실을 입력해주세요." />
        <CommandList>
          <CommandEmpty>검색하신 객실이 없습니다.</CommandEmpty>
          <CommandItem
            className="cursor-pointer"
            onSelect={() => onClick('dashboard')}
            value="대시보드"
          >
            대시보드
          </CommandItem>
          {room.map((value) => (
            <CommandItem
              className="cursor-pointer"
              onSelect={() => onClick(value.id)}
              key={value.id}
              value={value.name}
            >
              {value.name}
            </CommandItem>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};
