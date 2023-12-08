import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useModalStore } from '@/store/use-modal-store';

export const RoomDeleteModal = () => {
  const { isOpen, type, data, closeModal } = useModalStore();

  const open = isOpen && type === 'room-delete';

  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogContent className="z-50 w-auto min-w-[320px] gap-0 overflow-hidden p-0 dark:bg-dark-200">
        <DialogHeader>
          <DialogTitle className="bg-camp-heavy py-3 pl-4 text-left text-sm font-bold text-white">
            객실 삭제
          </DialogTitle>
          <DialogDescription className="select-none p-3 text-xs leading-5 text-zinc-600 dark:text-zinc-400">
            정말로{' '}
            <span className="font-bold text-camp-heavy">{`"${data?.room?.name}"`}</span>{' '}
            객실을 삭제하시겠습니까?
            <br />
            삭제된 객실은 복구하실수없습니다.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="px-3 py-2">
          <button
            onClick={closeModal}
            className="rounded-md bg-rose-500 px-2 py-1 text-sm font-bold text-white transition hover:bg-rose-500/70"
          >
            삭제
          </button>
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
