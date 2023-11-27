import { LogOut, Settings } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface UserProfileSettingProps {
  onClose: () => void;
}

export const UserProfileSetting = ({ onClose }: UserProfileSettingProps) => {
  const settingRef = useRef<HTMLDivElement>(null);

  const onLogout = () => {
    signOut({
      callbackUrl: '/',
    });
  };

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (!settingRef.current?.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [settingRef, onClose]);

  return (
    <motion.div
      ref={settingRef}
      initial={{ opacity: 0, width: 40, height: 40 }}
      animate={{ opacity: 1, width: 140, height: 73 }}
      exit={{ opacity: 0, width: 40, height: 40 }}
      className="absolute bottom-8 left-8 z-50 flex w-[140px] select-none flex-col overflow-hidden rounded-md border border-zinc-400 bg-white shadow-lg"
    >
      <button className="flex items-center justify-between border-b border-zinc-400 px-2 py-2 transition hover:bg-zinc-100">
        <p className="text-sm text-zinc-700">설정</p>
        <Settings className="h-4 w-4  fill-zinc-200 stroke-zinc-400" />
      </button>
      <button
        onClick={onLogout}
        className="flex items-center justify-between px-2 py-2 transition hover:bg-zinc-100"
      >
        <p className="text-sm text-zinc-700">로그아웃</p>
        <LogOut className="h-4 w-4 stroke-zinc-400" />
      </button>
    </motion.div>
  );
};
