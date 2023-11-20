'use client';
import { z } from 'zod';
import Input from '@/components/common/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginForm = z.object({
  userId: z.string().min(1, {
    message: '아이디를 입력해 주세요.',
  }),
  userPw: z.string().min(1, {
    message: '비밀번호를 입력해 주세요.',
  }),
});

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<z.infer<typeof LoginForm>>({
    resolver: zodResolver(LoginForm),
  });

  const onLogin = (data: z.infer<typeof LoginForm>) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onLogin)}
      className="flex flex-1 flex-col space-y-12"
    >
      <Input
        label="아이디"
        placeholder="아이디를 입력해 주세요."
        type="text"
        warning={errors.userId?.message}
        register={register('userId')}
      />
      <Input
        label="비밀번호"
        placeholder="비밀번호를 입력해 주세요."
        type="password"
        warning={errors.userPw?.message}
        register={register('userPw')}
      />
      <button
        disabled={isSubmitting}
        className="w-full rounded-sm bg-camp-heavy py-2 text-center font-semibold text-white disabled:bg-camp-light"
      >
        로그인
      </button>
    </form>
  );
}
