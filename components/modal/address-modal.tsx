import { motion, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import DaumPostCode, { Address } from 'react-daum-postcode';
import { createPortal } from 'react-dom';
import { BackDrop } from '../common/backdrop';

interface AddressModalProps {
  onClose: () => void;
  onComplete: (address: Address) => void;
}

export const AddressModal = ({ onClose, onComplete }: AddressModalProps) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  const transformHalf = useTransform(() => '-50%').get();

  useEffect(() => {
    const portal = document.getElementById('address-portal');

    setPortalElement(portal);
  }, []);

  if (!portalElement) return;

  return (
    <>
      {createPortal(<BackDrop onClose={onClose} />, portalElement)}
      {createPortal(
        <motion.div
          layout
          variants={{}}
          initial={{
            opacity: 0,
            translateY: -100,
            translateX: transformHalf,
          }}
          animate={{
            opacity: 1,
            translateY: transformHalf,
            translateX: transformHalf,
          }}
          exit={{
            opacity: 0,
          }}
          className="absolute left-1/2 top-1/2 z-[100] w-[500px] max-w-[90vw]"
        >
          <DaumPostCode onComplete={onComplete} style={{ zIndex: 999 }} />
        </motion.div>,
        portalElement,
      )}
    </>
  );
};
