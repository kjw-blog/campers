import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

import Input from '@/components/common/input';
import axios, { isAxiosError } from 'axios';

const Form = z
  .object({
    name: z.string().min(1, { message: '이름을 입력해 주세요.' }),
    userId: z
      .string()
      .min(1, {
        message: '아이디를 입력해 주세요.',
      })
      .regex(
        /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,14}$/,
        '소문자, 숫자가 조합된 6~14 글자를 입력해 주세요.',
      ),
    userPw: z
      .string()
      .min(1, {
        message: '비밀번호를 입력해 주세요.',
      })
      .regex(
        /^(?=.*[a-z])(?=.*[!@#$%^&*()])(?=.*\d)[a-z\d!@#$%^&*()]{8,20}$/,
        '소문자, 특수문자, 숫자가 포함된 8~20 글자를 입력해 주세요.',
      ),
    userPwCheck: z.string().min(1, {
      message: '비밀번호를 다시 입력해 주세요.',
    }),
    email: z
      .string()
      .min(1, {
        message: '이메일을 입력해 주세요.',
      })
      .email({
        message: '이메일 형식을 확인해 주세요.',
      }),
  })
  .refine((data) => data.userPw === data.userPwCheck, {
    path: ['userPwCheck'],
    message: '비밀번호가 일치하지 않습니다.',
  });

export const SignupForm = () => {
  const { get } = useSearchParams();
  const type = get('type');

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setError,
  } = useForm<z.infer<typeof Form>>({
    resolver: zodResolver(Form),
  });

  const onSubmit = async (data: z.infer<typeof Form>) => {
    try {
      await axios.post('/api/auth/register', { ...data, type });
    } catch (e) {
      if (isAxiosError(e)) {
        const error = e.response?.data;

        Object.keys(error).forEach((key) => {
          setError(key as 'email' | 'userId', { message: error[key] });
        });
      } else {
        console.log(e);
      }
    }
  };

  return (
    <div className="w-[420px] rounded-md border border-zinc-200 p-4 py-10 shadow-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-10"
      >
        <Input
          type="text"
          label="이름"
          placeholder="이름 입력해 주세요."
          register={register('name')}
          warning={errors.name?.message}
        />
        <Input
          type="email"
          label="이메일"
          placeholder="이메일을 입력해 주세요."
          register={register('email')}
          warning={errors.email?.message}
        />
        <Input
          type="text"
          label="아이디"
          placeholder="아이디를 입력해 주세요."
          register={register('userId')}
          warning={errors.userId?.message}
        />
        <Input
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요."
          register={register('userPw')}
          warning={errors.userPw?.message}
        />
        <Input
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 재입력해 주세요."
          register={register('userPwCheck')}
          warning={errors.userPwCheck?.message}
        />

        <button
          disabled={isSubmitting}
          className="flex w-full justify-center rounded-sm bg-camp-heavy py-2 text-center font-semibold text-white"
        >
          {isSubmitting ? <Loader2 className="animate-spin" /> : '회원가입'}
        </button>
      </form>
    </div>
  );
};
