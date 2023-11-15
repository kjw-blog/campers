'use client';

import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div>
      <button onClick={() => signIn()}>로그인</button>
    </div>
  );
}
