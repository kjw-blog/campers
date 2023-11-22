import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useModalStore } from '@/store/use-modal-store';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';

export const ErrorModal = () => {
  const { isOpen, type, data, closeModal } = useModalStore();

  const open = isOpen && type === 'error-modal';

  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogContent className="w-auto p-0">
        <DialogHeader className="px-12">
          <DialogTitle className="pt-6 text-center text-xl font-bold text-rose-600">
            오류 발생
          </DialogTitle>
          <DialogDescription className="text-xs text-zinc-600">
            {data?.text}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="pb-2 pr-4">
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
