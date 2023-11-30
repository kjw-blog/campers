'use client';

import { useEffect, useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { InitialCampForm } from '../host/form/initial-camp-form';

export const InitialCampModal = () => {
  const [onMount, setOnMount] = useState(false);

  useEffect(() => {
    setOnMount(true);
  }, []);

  if (!onMount) return null;

  return (
    <Dialog open={true}>
      <DialogContent className="w-[500px] max-w-[calc(90vw+1.5rem)] overflow-hidden rounded-md p-0 dark:bg-dark-200">
        <DialogHeader>
          <DialogTitle className="bg-camp-heavy px-4 py-3 text-left text-sm font-bold text-white">
            캠핑장 추가
          </DialogTitle>
        </DialogHeader>
        <InitialCampForm />
      </DialogContent>
    </Dialog>
  );
};
