'use client';

import { useSession, signOut } from 'next-auth/react';

export default function CustomerPage() {
  const { data } = useSession();

  console.log(data);

  return (
    <div>
      <button onClick={() => signOut()}>로그아웃</button>
    </div>
  );
}
