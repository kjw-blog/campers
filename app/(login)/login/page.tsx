'use client';

import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const onLogin = () => {
    signIn('google');
  };

  return (
    <div className="flex-1">
      <button onClick={onLogin}>로그인</button>
    </div>
  );
}
