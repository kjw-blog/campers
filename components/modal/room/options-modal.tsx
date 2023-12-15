import { z } from 'zod';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useModalStore } from '@/store/use-modal-store';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRoomStore } from '@/store/use-room-data';
import { Loader2, Minus, Plus } from 'lucide-react';

const Form = z.object({
  baseGuestNumber: z.number(),
  maximumGuestNumber: z.number(),
  additionalPrice: z.number(),
  peakSeasonPrice: z.number(),
  semiPeakSeasonPrice: z.number(),
  offSeasonPrice: z.number(),
});

export const OptionsModal = () => {
  const { isOpen, type, closeModal } = useModalStore();
  const { room } = useRoomStore();

  const open = isOpen && type === 'room-options';

  const {
    formState: { isSubmitting },
  } = useForm<z.infer<typeof Form>>({
    resolver: zodResolver(Form),
    defaultValues: {
      additionalPrice: 0,
      baseGuestNumber: 0,
      maximumGuestNumber: 0,
      offSeasonPrice: 0,
      peakSeasonPrice: 0,
      semiPeakSeasonPrice: 0,
    },
  });

  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogContent className="z-50 w-[380px] max-w-[95%] gap-0 overflow-hidden rounded-md p-0 dark:bg-dark-200">
        <DialogHeader>
          <DialogTitle className="bg-camp-heavy py-3 pl-4 text-left text-sm font-bold text-white">
            객실 설정
          </DialogTitle>
          <DialogDescription className="select-none space-y-3 p-3 text-xs font-bold text-zinc-600 dark:text-zinc-400">
            <div className="grid w-full auto-rows-[minmax(30px,auto)] grid-cols-10 items-center space-x-3">
              <span className="col-[1/3]">기준 인원</span>
              <div className="col-[3/11] flex h-full">
                <button className="rounded-bl-md rounded-tl-md border-2 border-zinc-200 px-1 dark:border-none dark:bg-zinc-600">
                  <Minus className="h-4 w-4" />
                </button>
                <input
                  type="text"
                  className="flex-1 border-y-2 px-2 outline-none dark:border-none"
                />
                <button className="rounded-br-md rounded-tr-md border-2 border-zinc-200 px-1 dark:border-none dark:bg-zinc-600">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="grid w-full auto-rows-[minmax(30px,auto)] grid-cols-10 items-center space-x-3">
              <span className="col-[1/3]">최대 인원</span>
              <div className="col-[3/11] flex h-full">
                <button className="rounded-bl-md rounded-tl-md border-2 border-zinc-200 px-1 dark:border-none dark:bg-zinc-600">
                  <Minus className="h-4 w-4" />
                </button>
                <input
                  type="text"
                  className="flex-1 border-y-2 px-2 outline-none dark:border-none"
                />
                <button className="rounded-br-md rounded-tr-md border-2 border-zinc-200 px-1 dark:border-none dark:bg-zinc-600">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="ml-auto flex space-x-2 px-3 py-2">
          <button
            onClick={closeModal}
            className="h-[30px] w-[50px] rounded-md bg-camp-heavy text-sm font-bold text-white transition hover:bg-camp-heavy/70"
          >
            {isSubmitting ? (
              <Loader2 className="mx-auto h-4 w-4 animate-spin " />
            ) : (
              '저장'
            )}
          </button>
          <button
            onClick={closeModal}
            className="h-[30px] w-[50px] rounded-md bg-camp-heavy  text-sm font-bold text-white transition hover:bg-camp-heavy/70"
          >
            닫기
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
