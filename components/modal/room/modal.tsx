import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

import { BackDrop } from '@/components/common/backdrop';

interface ModalProps {
  onClose: () => void;
  open: boolean;
  children: React.ReactNode;
}

export const Modal = ({ onClose, children, open }: ModalProps) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
  const [backdropElement, setBackdropElement] = useState<HTMLElement | null>(
    null,
  );

  useEffect(() => {
    const portal = document.getElementById('modal-portal');
    const backdrop = document.getElementById('backdrop');

    setPortalElement(portal);
    setBackdropElement(backdrop);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  if (!portalElement || !backdropElement || !open) return;

  return (
    <>
      {createPortal(<BackDrop onClose={onClose} />, backdropElement)}
      {createPortal(
        <motion.dialog
          open
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed left-1/2 top-1/2 z-[100] mx-0 max-w-[95vw] -translate-x-[50%] -translate-y-[50%] overflow-hidden rounded-md border border-zinc-300 p-0 shadow-2xl dark:border-zinc-500 dark:bg-dark-200 dark:shadow-dark_md"
        >
          {children}
        </motion.dialog>,
        portalElement,
      )}
    </>
  );
};
