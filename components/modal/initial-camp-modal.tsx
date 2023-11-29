'use client';

import { useEffect, useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { FileUpload } from '../common/file-upload';

export const InitialCampModal = () => {
  const [onMount, setOnMount] = useState(false);

  useEffect(() => {
    setOnMount(true);
  }, []);

  if (!onMount) return null;

  return (
    <Dialog open={true}>
      <DialogContent className="w-auto overflow-hidden p-0 dark:bg-dark-100">
        <DialogHeader>
          <DialogTitle className="bg-camp-heavy px-4 py-3 text-left text-sm font-bold text-white">
            캠핑장 추가
          </DialogTitle>
        </DialogHeader>
        <form className="px-3">
          <FileUpload />
        </form>
      </DialogContent>
    </Dialog>
  );
};
