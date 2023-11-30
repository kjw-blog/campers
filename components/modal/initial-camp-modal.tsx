'use client';

import { useEffect, useRef, useState } from 'react';
import { z } from 'zod';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { FileUpload } from '@/components/common/file-upload';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';

const CampForm = z.object({
  thumbnail: z.string().min(1, {
    message: '썸네일 이미지를 추가해 주세요.',
  }),
  name: z.string().min(1, {
    message: '캠핑장 이름을 입력해 주세요.',
  }),
});

export const InitialCampModal = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [onMount, setOnMount] = useState(false);
  const [formStep, setFormStep] = useState(0);

  const { control, watch } = useForm<z.infer<typeof CampForm>>({
    resolver: zodResolver(CampForm),
    defaultValues: {
      thumbnail: '',
      name: '',
    },
  });

  useEffect(() => {
    setOnMount(true);
  }, []);

  if (!onMount) return null;

  const nextButtonHandler = () => {
    const form = formRef.current;

    if (form) {
      if (formStep >= 1) return;

      if (formStep === 0 && !watch('thumbnail')) {
        alert('썸네일을 등록해 주세요.');
        return;
      }

      const formWidth = form.clientWidth;

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

      const formWidth = form.clientWidth;

      const transform = form.style.transform.match(/\d+/g)?.[0] || '0';
      const transformNumber = -parseInt(transform);

      const move = transformNumber + formWidth;

      setFormStep((prevStep) => prevStep - 1);

      form.style.transform = `translateX(${move}px)`;
    }
  };

  return (
    <Dialog open={true}>
      <DialogContent className="w-[90%] overflow-hidden rounded-md p-0 dark:bg-dark-100 sm:w-[500px]">
        <DialogHeader>
          <DialogTitle className="bg-camp-heavy px-4 py-3 text-left text-sm font-bold text-white">
            캠핑장 추가
          </DialogTitle>
        </DialogHeader>
        <form ref={formRef} className="w-full px-3 transition duration-1000">
          <Controller
            name="thumbnail"
            control={control}
            render={({ field }) => (
              <FileUpload value={field.value} onChange={field.onChange} />
            )}
          />
        </form>
        <div className="flex items-center !justify-between px-3 pb-3">
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
      </DialogContent>
    </Dialog>
  );
};
