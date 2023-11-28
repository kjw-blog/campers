'use client';

import { useEffect, useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export const InitialCampModal = () => {
  const [onMount, setOnMount] = useState(false);

  useEffect(() => {
    setOnMount(true);
  });

  if (!onMount) return <></>;

  return (
    <Dialog open={true}>
      <DialogContent className="w-auto min-w-[320px] overflow-hidden p-0 dark:bg-dark-200">
        <DialogHeader>
          <DialogTitle className="bg-camp-heavy py-3 pl-4 text-left text-sm font-bold text-white">
            캠핑장 추가
          </DialogTitle>
          <DialogDescription className="p-3 text-xs text-zinc-600">
            테스트
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
