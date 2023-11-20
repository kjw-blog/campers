import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../common/input';

const Form = z
  .object({
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
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<z.infer<typeof Form>>({
    resolver: zodResolver(Form),
  });

  const onSubmit = (data: z.infer<typeof Form>) => {
    console.log(data);
  };

  return (
    <div className="w-[420px] rounded-md border border-zinc-200 p-4 py-10 shadow-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-12"
      >
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
        <Input
          type="email"
          label="이메일"
          placeholder="이메일을 입력해 주세요."
          register={register('email')}
          warning={errors.email?.message}
        />
        <button
          disabled={isSubmitting}
          className="w-full rounded-sm bg-camp-heavy py-2 text-center font-semibold text-white disabled:bg-camp-light"
        >
          회원가입
        </button>
      </form>
    </div>
  );
};
