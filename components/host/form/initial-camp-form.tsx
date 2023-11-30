import { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { useModalStore } from '@/store/use-modal-store';
import { zodResolver } from '@hookform/resolvers/zod';
import { FileUpload } from '@/components/common/file-upload';
import { cn } from '@/lib/utils';
import Input from '@/components/common/input';

const CampForm = z.object({
  thumbnail: z.string().min(1, {
    message: '썸네일 이미지를 추가해 주세요.',
  }),
  name: z.string().min(1, {
    message: '캠핑장 이름을 입력해 주세요.',
  }),
  detailAddress: z.string(),
});

export const InitialCampForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStep, setFormStep] = useState(0);

  const { openModal } = useModalStore();

  const {
    control,
    watch,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof CampForm>>({
    resolver: zodResolver(CampForm),
    defaultValues: {
      thumbnail: '',
      name: '',
      detailAddress: '',
    },
  });

  const nextButtonHandler = () => {
    const form = formRef.current;

    if (form) {
      if (formStep >= 1) return;

      if (formStep === 0 && !watch('thumbnail')) {
        openModal('error', {
          text: '썸네일을 등록해 주세요.',
          title: '입력 요청',
        });
        return;
      }

      const formWidth = form.clientWidth / 2 - 6;

      const transform = form.style.transform.match(/\d+/g)?.[0] || '0';
      const transformNumber = -parseInt(transform);

      const move = transformNumber - formWidth;

      setFormStep((prevStep) => prevStep + 1);

      form.style.transform = `translateX(${move}px)`;
    }
  };

  const prevButtonHandler = () => {
    const form = formRef.current;

    if (form) {
      if (formStep === 0) return;

      const formWidth = form.clientWidth / 2 - 6;

      const transform = form.style.transform.match(/\d+/g)?.[0] || '0';
      const transformNumber = -parseInt(transform);

      const move = transformNumber + formWidth;

      setFormStep((prevStep) => prevStep - 1);

      form.style.transform = `translateX(${move}px)`;
    }
  };

  return (
    <>
      <form
        ref={formRef}
        className="flex w-full items-center space-x-3 px-3 transition duration-1000"
      >
        <Controller
          name="thumbnail"
          control={control}
          render={({ field }) => (
            <FileUpload value={field.value} onChange={field.onChange} />
          )}
        />
        <div className="flex w-[90vw] flex-col space-y-4 sm:w-[476px]">
          <div className="flex w-full justify-between space-x-5">
            <input
              disabled
              type="text"
              placeholder="주소"
              className="flex-1 rounded-sm border border-zinc-300 px-[10px] py-4 text-sm text-zinc-500 outline-none dark:bg-[#3b3b3b]"
            />
            <button
              type="button"
              className="rounded-md bg-camp-heavy px-4 text-sm font-bold text-white"
            >
              주소검색
            </button>
          </div>
          <Input
            label="상세주소"
            register={register('detailAddress')}
            placeholder="상세주소를 입력해 주세요."
          />
          <Input
            label="캠핑장 이름"
            register={register('name')}
            placeholder="캠핑장 이름을 입력해 주세요."
            warning={errors.name?.message}
          />
        </div>
      </form>
      <div className="flex w-[500px] max-w-[calc(90vw+1.5rem)] items-center !justify-between px-3 pb-3">
        <button
          onClick={prevButtonHandler}
          disabled={formStep === 0}
          className="rounded-md bg-camp-heavy px-4 py-2 font-bold text-white duration-300 disabled:opacity-0"
        >
          이전
        </button>
        <div className="flex space-x-1">
          <div
            className={cn(
              'h-2 w-2 rounded-full duration-1000',
              formStep === 0 ? 'scale-125 bg-camp-heavy' : 'bg-camp-light',
            )}
          />
          <div
            className={cn(
              'h-2 w-2 rounded-full duration-1000',
              formStep === 1 ? 'scale-125 bg-camp-heavy' : 'bg-camp-light',
            )}
          />
        </div>
        <button
          onClick={nextButtonHandler}
          className="rounded-md bg-camp-heavy px-4 py-2 font-bold text-white"
        >
          다음
        </button>
      </div>
    </>
  );
};
