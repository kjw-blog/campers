'use client';

import { useEffect, useState } from 'react';

import { InitialCampForm } from '@/components/host/form/initial-camp-form';

export const InitialCampModal = () => {
  const [onMount, setOnMount] = useState(false);

  useEffect(() => {
    setOnMount(true);
  }, []);

  if (!onMount) return null;

  return (
    <>
      <div className="fixed left-0 right-0 z-30 h-[100vh] w-[100vw] backdrop-blur-sm " />
      <dialog
        open
        className="fixed left-1/2 top-1/2 z-40 max-w-[calc(90vw+1.5rem)] -translate-x-[50%] -translate-y-[50%] space-y-3 overflow-hidden rounded-md border border-zinc-500 p-0 dark:bg-dark-200"
      >
        <header className="bg-camp-heavy px-4 py-3 text-left text-sm font-bold text-white">
          캠핑장 추가
        </header>
        <InitialCampForm />
      </dialog>
    </>
  );
};
