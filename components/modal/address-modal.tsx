import { motion, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import DaumPostCode from 'react-daum-postcode';
import { createPortal } from 'react-dom';

interface AddressModalProps {
  onClose: () => void;
}

const BackDrop = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      onClick={onClose}
      className="fixed left-0 top-0 z-[99] h-[100vh] w-[100vw] backdrop-blur-sm"
    />
  );
};

export const AddressModal = ({ onClose }: AddressModalProps) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  const transformHalf = useTransform(() => '-50%').get();

  useEffect(() => {
    const portal = document.getElementById('portal');

    setPortalElement(portal);
  }, []);

  if (!portalElement) return;

  return (
    <>
      {createPortal(<BackDrop onClose={onClose} />, portalElement)}
      {createPortal(
        <motion.div
          variants={{}}
          initial={{
            opacity: 0,
            translateY: -140,
            translateX: transformHalf,
          }}
          animate={{
            opacity: 1,
            translateY: transformHalf,
            translateX: transformHalf,
          }}
          exit={{
            opacity: 0,
            translateY: -140,
            translateX: transformHalf,
          }}
          className="absolute left-1/2 top-1/2 z-[100] w-[500px] max-w-[90vw]"
        >
          <DaumPostCode style={{ zIndex: 999 }} />
        </motion.div>,
        portalElement,
      )}
    </>
  );
};
