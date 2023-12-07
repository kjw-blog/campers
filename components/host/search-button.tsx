'use client';

import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

export const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        className="text-md group  flex h-12 w-full items-center px-3 transition hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50"
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
        </CommandList>
        <CommandGroup heading="객실">
          <CommandItem value="101호">101호</CommandItem>
          <CommandItem value="102호">102호</CommandItem>
          <CommandItem value="103호">103호</CommandItem>
        </CommandGroup>
      </CommandDialog>
    </>
  );
};
