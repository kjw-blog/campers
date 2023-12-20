import { Loader2 } from 'lucide-react';
import { useCallback, useState } from 'react';

import { useModalStore } from '@/store/use-modal-store';
import { OptionsForm } from '@/components/host/room/options-form';
import { Modal } from './modal';

export const AddImageModal = () => {
  const { isOpen, type, closeModal } = useModalStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const open = isOpen && type === 'room-add-image';

  const onSubmitting = useCallback((value: boolean) => {
    setIsSubmitting(value);
  }, []);

  return (
    <Modal open={open} onClose={closeModal}>
      <div className="z-50 flex w-[500px] max-w-[100%] flex-col gap-0 space-y-2 overflow-hidden rounded-md p-0 dark:bg-dark-200">
        <header>
          <div className="bg-camp-heavy py-3 pl-4 text-left text-sm font-bold text-white">
            객실 사진
          </div>
        </header>
        <div className="max-h-[400px] w-full select-none divide-y-2 divide-zinc-700 overflow-y-auto p-3  text-xs font-bold text-zinc-600 dark:divide-zinc-400 dark:text-zinc-400">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex h-[80px] w-full items-center py-2">
              이미지 {i + 1}
            </div>
          ))}
        </div>
        <div className="ml-auto flex justify-end space-x-2 px-3 py-2">
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
      </div>
    </Modal>
  );
};
