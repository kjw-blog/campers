'use client';

import { useCallback, useState } from 'react';
import { User } from 'lucide-react';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { UserProfileSetting } from './user-profile-setting';

interface UserProfileProps {
  src?: string;
}

export const UserProfile = ({ src }: UserProfileProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const avatar = src ? (
    <AvatarImage src="https://github.com/shadcn.png" />
  ) : (
    <div className="group flex h-full w-full items-center justify-center bg-white transition hover:bg-camp-middle">
      <User className="stroke-camp-heavy transition group-hover:stroke-white" />
    </div>
  );

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="relative">
      <Avatar
        onClick={() => setIsOpen(true)}
        className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center shadow-md"
      >
        {avatar}
      </Avatar>
      {isOpen && <UserProfileSetting onClose={handleClose} />}
    </div>
  );
};
