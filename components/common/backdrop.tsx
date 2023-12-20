import { motion } from 'framer-motion';

export const BackDrop = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed left-0 top-0 z-[99] h-[100vh] w-[100vw] backdrop-blur-sm"
    />
  );
};
