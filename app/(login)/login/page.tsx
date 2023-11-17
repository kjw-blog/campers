'use client';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { Input } from '@/components/common/input';

const LoginForm = z.object({
  userId: z.string().min(1, {
    message: '아이디를 입력해 주세요.',
  }),
  userPw: z.string().min(1, {
    message: '비밀번호를 입력해 주세요.',
  }),
});

export default function LoginPage() {
  const onLogin = () => {
    signIn('google');
  };

  return (
    <form className="flex flex-1 flex-col space-y-12">
      <Input />
      <button
        className="bg-camp-light w-full rounded-sm py-2 text-center font-semibold text-white"
        onClick={onLogin}
      >
        로그인
      </button>
    </form>
  );
}
