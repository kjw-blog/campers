'use client';

import { signOut } from 'next-auth/react';

export default function HostPage() {
  const onLogout = () => {
    signOut({
      callbackUrl: '/',
    });
  };

  return <button onClick={onLogout}>로그아웃</button>;
}
