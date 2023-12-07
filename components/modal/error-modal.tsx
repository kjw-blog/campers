import { X } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useModalStore } from '@/store/use-modal-store';

export const ErrorModal = () => {
  const { isOpen, type, data, closeModal } = useModalStore();

  const open = isOpen && type === 'error';

  const messages = data?.text;

  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogContent className="z-50 w-auto min-w-[320px] gap-0 overflow-hidden p-0 dark:bg-dark-100">
        <DialogHeader>
          <DialogTitle className="bg-camp-heavy py-3 pl-4 text-left text-sm font-bold text-white">
            {data?.title ?? '오류 발생'}
          </DialogTitle>
          <DialogDescription className="select-none p-3 text-xs text-zinc-600 ">
            {typeof messages === 'string' && <>{messages}</>}
            {typeof messages !== 'string' &&
              messages &&
              messages.length > 0 && (
                <div className="flex flex-col space-y-4">
                  {messages.map((message, idx) => (
                    <div
                      className="flex items-center justify-center space-x-2"
                      key={idx}
                    >
                      <X className="h-4 w-4 stroke-rose-500" />
                      <span>{message}</span>
                    </div>
                  ))}
                </div>
              )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="px-3 py-2">
          <button
            onClick={closeModal}
            className="rounded-md bg-camp-heavy px-2 py-1 text-sm font-bold text-white transition hover:bg-camp-heavy/70"
          >
            닫기
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
