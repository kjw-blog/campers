'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { User } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { UserProfileSetting } from './user-profile-setting';

interface UserProfileProps {
  src?: string;
}

export const UserProfile = ({ src }: UserProfileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);

  const avatar = src ? (
    <AvatarImage src="https://github.com/shadcn.png" />
  ) : (
    <div className="group flex h-full w-full items-center justify-center bg-white transition hover:bg-camp-middle">
      <User className="stroke-camp-heavy transition group-hover:stroke-white" />
    </div>
  );

  const buttonHandler = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (!avatarRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [avatarRef]);

  return (
    <div className="relative" ref={avatarRef}>
      <Avatar
        onClick={buttonHandler}
        className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center shadow-md"
      >
        {avatar}
      </Avatar>
      <AnimatePresence>{isOpen && <UserProfileSetting />}</AnimatePresence>
    </div>
  );
};
