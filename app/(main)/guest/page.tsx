'use client';

import { useSession, signOut } from 'next-auth/react';

export default function CustomerPage() {
  const { data } = useSession();

  const onLogout = () => {
    signOut({
      callbackUrl: '/',
    });
  };

  return (
    <div>
      <button onClick={onLogout}>로그아웃</button>
    </div>
  );
}
