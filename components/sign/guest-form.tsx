import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const Form = z.object({
  userId: z.string().min(1, {
    message: '아이디를 입력해 주세요.',
  }),
  userPw: z.string().min(1, {
    message: '아이디를 입력해 주세요.',
  }),
  email: z
    .string()
    .min(1, {
      message: '이메일을 입력해 주세요.',
    })
    .email({
      message: '이메일 형식을 확인해 주세요.',
    }),
});

export const GuestForm = () => {
  const { register } = useForm({
    resolver: zodResolver(Form),
  });

  return <form></form>;
};
