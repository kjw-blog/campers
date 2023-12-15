import { Loader2 } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useModalStore } from '@/store/use-modal-store';

import { OptionsForm } from '@/components/host/room/options-form';
import { useCallback, useState } from 'react';

export const OptionsModal = () => {
  const { isOpen, type, closeModal } = useModalStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const open = isOpen && type === 'room-options';

  const onSubmitting = useCallback((value: boolean) => {
    setIsSubmitting(value);
  }, []);

  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogContent className="z-50 w-[450px] max-w-[95%] gap-0 overflow-hidden rounded-md p-0 dark:bg-dark-200">
        <DialogHeader>
          <DialogTitle className="bg-camp-heavy py-3 pl-4 text-left text-sm font-bold text-white">
            객실 설정
          </DialogTitle>
          <div className="select-none p-3 text-xs font-bold text-zinc-600 dark:text-zinc-400">
            <OptionsForm onSubmitting={onSubmitting} />
          </div>
        </DialogHeader>
        <div className="ml-auto flex space-x-2 px-3 py-2">
          <button
            form="save-room-options"
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
            type="button"
            className="h-[30px] w-[50px] rounded-md bg-camp-heavy  text-sm font-bold text-white transition hover:bg-camp-heavy/70"
          >
            닫기
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
