'use client';

import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { InitialCampForm } from '@/components/host/form/initial-camp-form';
import { useModalStore } from '@/store/use-modal-store';

export const CreateCampModal = () => {
  const { type, isOpen, closeModal } = useModalStore();
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.getElementById('backdrop');

    setPortalElement(element);
  }, []);

  const openModal = isOpen && type === 'create-camp';

  if (!portalElement || !openModal) return;

  return (
    <>
      {createPortal(
        <div
          onClick={closeModal}
          className="fixed left-0 top-0 z-30 h-[100vh] w-[100vw] backdrop-blur-sm"
        />,
        portalElement,
      )}
      <motion.dialog
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        open
        className="fixed left-1/2 top-1/2 z-40 mx-0 max-w-[calc(90vw+1.5rem)] -translate-x-[50%] -translate-y-[50%] space-y-3 overflow-hidden rounded-md border border-zinc-300 p-0 shadow-2xl dark:border-zinc-500 dark:bg-dark-200 dark:shadow-dark_md"
      >
        <header className="flex items-center justify-between bg-camp-heavy px-4 py-3 text-left text-sm font-bold text-white">
          <span>캠핑장 추가</span>
          <X className="h-4 w-4 cursor-pointer" onClick={closeModal} />
        </header>
        <InitialCampForm />
      </motion.dialog>
    </>
  );
};
