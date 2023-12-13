import { useState } from 'react';
import axios from 'axios';
import qs from 'query-string';
import { useRouter } from 'next/navigation';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useModalStore } from '@/store/use-modal-store';
import { Loader2 } from 'lucide-react';

export const CampDeleteModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { isOpen, type, data, closeModal } = useModalStore();

  const open = isOpen && type === 'camp-delete';

  const onDelete = async () => {
    try {
      setIsLoading(true);

      const url = qs.stringifyUrl({
        url: '/api/host/camp',
        query: {
          campId: data?.camp?.id,
        },
      });

      await axios.delete(url);
      router.refresh();
      closeModal();
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogContent className="z-50 w-auto min-w-[320px] gap-0 overflow-hidden p-0 dark:bg-dark-200">
        <DialogHeader>
          <DialogTitle className="bg-camp-heavy py-3 pl-4 text-left text-sm font-bold text-white">
            캠핑장 삭제
          </DialogTitle>
          <DialogDescription className="select-none p-3 text-xs leading-5 text-zinc-600 dark:text-zinc-400">
            정말로{' '}
            <span className="font-bold text-camp-heavy">{`"${data?.camp?.name}"`}</span>{' '}
            캠핑장을 삭제하시겠습니까?
            <br />
            객실을 비롯한 모든 데이터는 복구하실 수 없습니다.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="px-3 py-2">
          <button
            onClick={onDelete}
            disabled={isLoading}
            className="h-[30px] w-[50px] rounded-md bg-rose-500 text-sm font-bold text-white transition hover:bg-rose-500/70"
          >
            {isLoading ? (
              <Loader2 className="mx-auto h-4 w-4 animate-spin" />
            ) : (
              '삭제'
            )}
          </button>
          <button
            onClick={closeModal}
            className="h-[30px] w-[50px] rounded-md bg-camp-heavy text-sm font-bold text-white transition hover:bg-camp-heavy/70"
          >
            닫기
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
