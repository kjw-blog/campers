'use client';

import { useEffect, useState } from 'react';
import { z } from 'zod';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { FileUpload } from '@/components/common/file-upload';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const CampForm = z.object({
  thumbnail: z.string().min(1, {
    message: '썸네일 이미지를 추가해 주세요.',
  }),
  name: z.string().min(1, {
    message: '캠핑장 이름을 입력해 주세요.',
  }),
});

export const InitialCampModal = () => {
  const [onMount, setOnMount] = useState(false);

  const { control } = useForm<z.infer<typeof CampForm>>({
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

  return (
    <Dialog open={true}>
      <DialogContent className="w-auto overflow-hidden p-0 dark:bg-dark-100">
        <DialogHeader>
          <DialogTitle className="bg-camp-heavy px-4 py-3 text-left text-sm font-bold text-white">
            캠핑장 추가
          </DialogTitle>
        </DialogHeader>
        <form className="px-3 pb-3">
          <Controller
            name="thumbnail"
            control={control}
            render={({ field }) => (
              <FileUpload value={field.value} onChange={field.onChange} />
            )}
          />
        </form>
      </DialogContent>
    </Dialog>
  );
};
