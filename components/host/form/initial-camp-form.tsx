import { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { useModalStore } from '@/store/use-modal-store';
import { zodResolver } from '@hookform/resolvers/zod';
import { FileUpload } from '@/components/common/file-upload';
import { cn } from '@/lib/utils';

const CampForm = z.object({
  thumbnail: z.string().min(1, {
    message: '썸네일 이미지를 추가해 주세요.',
  }),
  name: z.string().min(1, {
    message: '캠핑장 이름을 입력해 주세요.',
  }),
});

export const InitialCampForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStep, setFormStep] = useState(0);

  const { openModal } = useModalStore();

  const { control, watch } = useForm<z.infer<typeof CampForm>>({
    resolver: zodResolver(CampForm),
    defaultValues: {
      thumbnail: '',
      name: '',
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
        className="flex w-full space-x-3 px-3 transition duration-1000"
      >
        <Controller
          name="thumbnail"
          control={control}
          render={({ field }) => (
            <FileUpload value={field.value} onChange={field.onChange} />
          )}
        />
        <div className="h-full w-[480px] ">주소/캠핑장명</div>
      </form>
      <div className="flex w-[500px] max-w-[calc(90vw+1.5rem)] items-center !justify-between px-3 pb-3">
        <button
          onClick={prevButtonHandler}
          disabled={formStep === 0}
          className="rounded-md bg-camp-heavy px-4 py-2 duration-300 disabled:opacity-0"
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
          className="rounded-md bg-camp-heavy px-4 py-2"
        >
          다음
        </button>
      </div>
    </>
  );
};
