import { Loader2 } from 'lucide-react';
import { useCallback, useState } from 'react';

import { useModalStore } from '@/store/use-modal-store';
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
        <div className="flex max-h-[460px] w-full select-none flex-col p-3 text-zinc-600 dark:text-zinc-400">
          <div className="h-[60px] w-full border-b-[1px] border-zinc-700 text-sm font-bold dark:border-zinc-400">
            체크박스, 이미지명, 이미지, 수정버튼 타이틀
          </div>
          <div className="flex-1 divide-y-[1px] divide-zinc-700 overflow-y-auto text-xs font-bold dark:divide-zinc-400">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex h-[80px] w-full items-center py-2">
                {i === 0
                  ? '드래그 앤 드랍 순서바꾸기 구현해야됨'
                  : `이미지 ${i + 1}`}
              </div>
            ))}
          </div>
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
