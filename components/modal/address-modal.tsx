import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import DaumPostCode from 'react-daum-postcode';
import { createPortal } from 'react-dom';

const BackDrop = () => {
  return (
    <div className="fixed left-0 top-0 z-[99] h-[100vh] w-[100vw] backdrop-blur-sm" />
  );
};

export const AddressModal = () => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
  const [backdropElement, setBackdropElement] = useState<HTMLElement | null>(
    null,
  );

  useEffect(() => {
    const portal = document.getElementById('portal');
    const backdrop = document.getElementById('backdrop');

    setPortalElement(portal);
    setBackdropElement(backdrop);
  }, []);

  if (!portalElement || !backdropElement) return;

  return (
    <>
      {createPortal(<BackDrop />, backdropElement)}
      {createPortal(
        <div className="absolute left-1/2 top-1/2 z-[100] w-[500px] max-w-[90vw] -translate-x-[50%] -translate-y-[50%]">
          <DaumPostCode style={{ zIndex: 999 }} />
        </div>,
        portalElement,
      )}
    </>
  );
};
