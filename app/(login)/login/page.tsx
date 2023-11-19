'use client';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { Input } from '@/components/common/input';
import { useForm } from 'react-hook-form';

const LoginForm = z.object({
  userId: z.string().min(1, {
    message: '아이디를 입력해 주세요.',
  }),
  userPw: z.string().min(1, {
    message: '비밀번호를 입력해 주세요.',
  }),
});

export default function LoginPage() {
  const form = useForm();

  const onLogin = () => {};

  return (
    <form className="flex flex-1 flex-col space-y-12">
      <Input
        label="아이디"
        placeholder="아이디를 입력해 주세요."
        type="text"
        warning="아이디를 입력해 주세요."
      />
      <Input
        label="비밀번호"
        placeholder="비밀번호를 입력해 주세요."
        type="password"
        warning="비밀번호를 입력해 주세요."
      />
      <button
        className="w-full rounded-sm bg-camp-heavy py-2 text-center font-semibold text-white"
        onClick={onLogin}
      >
        로그인
      </button>
    </form>
  );
}
