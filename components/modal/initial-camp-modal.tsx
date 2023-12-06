'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
      <motion.dialog
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        open
        className="fixed left-1/2 top-1/2 z-40 mx-0 max-w-[calc(90vw+1.5rem)] -translate-x-[50%] -translate-y-[50%] space-y-3 overflow-hidden rounded-md border border-zinc-300 p-0 shadow-2xl dark:border-zinc-500 dark:bg-dark-200 dark:shadow-dark_md"
      >
        <header className="bg-camp-heavy px-4 py-3 text-left text-sm font-bold text-white">
          캠핑장 등록
        </header>
        <InitialCampForm />
      </motion.dialog>
    </>
  );
};
