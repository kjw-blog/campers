import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog';
import { useModalStore } from '@/store/use-modal-store';
import Input from '../common/input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader, Loader2 } from 'lucide-react';

const Form = z.object({
  name: z.string().min(1, {
    message: '객실명을 입력해 주세요.',
  }),
});

export const CreateRoomModal = () => {
  const { isOpen, type, data, closeModal } = useModalStore();

  const open = isOpen && type === 'create-room';

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<z.infer<typeof Form>>({
    resolver: zodResolver(Form),
    defaultValues: {
      name: '',
    },
  });

  const onValid = async ({ name }: z.infer<typeof Form>) => {};

  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogContent className="w-[90%] max-w-[400px] gap-0 overflow-hidden rounded-md p-0 dark:bg-dark-200">
        <DialogTitle className="bg-camp-heavy py-3 pl-4 text-left text-sm font-bold text-white">
          객실 추가
        </DialogTitle>
        <form
          onSubmit={handleSubmit(onValid)}
          id="create-room"
          className="px-2 pt-4"
        >
          <Input
            label="객실명"
            placeholder="객실명을 입력해 주세요."
            register={register('name')}
            warning={errors.name?.message}
          />
        </form>
        <DialogFooter className="px-2 py-2">
          <button
            form="create-room"
            type="submit"
            disabled={isSubmitting}
            className="h-[30px] w-[50px] rounded-md bg-camp-heavy text-sm font-bold text-white transition hover:bg-camp-heavy/70"
          >
            {isSubmitting ? (
              <Loader2 className="mx-auto h-4 w-4 animate-spin" />
            ) : (
              '저장'
            )}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
