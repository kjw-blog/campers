import { useRoomStore } from '@/store/use-room-data';
import { zodResolver } from '@hookform/resolvers/zod';
import { Minus, Plus } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const Form = z.object({
  baseGuestNumber: z.number(),
  maximumGuestNumber: z.number(),
  additionalPrice: z.number(),
  peakSeasonPrice: z.number(),
  semiPeakSeasonPrice: z.number(),
  offSeasonPrice: z.number(),
});

interface OptionsFormProps {
  onSubmitting: (value: boolean) => void;
}

export const OptionsForm = ({ onSubmitting }: OptionsFormProps) => {
  const { room } = useRoomStore();

  const {
    watch,
    setValue,
    register,
    handleSubmit,
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

  const onValid = (data: z.infer<typeof Form>) => {
    console.log(data);
  };

  const peopleHandler = (
    name: 'baseGuestNumber' | 'maximumGuestNumber',
    type: 'minus' | 'plus',
  ) => {
    const value = Number(watch(name));
    const otherName =
      name === 'baseGuestNumber' ? 'maximumGuestNumber' : 'baseGuestNumber';

    const otherValue = Number(watch(otherName));

    if (type === 'minus' && value <= 1) return;

    if (
      type === 'plus' &&
      name === 'baseGuestNumber' &&
      value + 1 > otherValue
    ) {
      setValue(otherName, value + 1);
    }

    if (
      type === 'minus' &&
      name === 'maximumGuestNumber' &&
      value - 1 < otherValue
    ) {
      setValue(otherName, value - 1);
    }

    setValue(name, value + (type === 'plus' ? 1 : -1));
  };

  useEffect(() => {
    onSubmitting(isSubmitting);
  }, [isSubmitting, onSubmitting]);

  return (
    <form
      id="save-room-options"
      onSubmit={handleSubmit(onValid)}
      className="space-y-3"
    >
      <div className="grid w-full auto-rows-[minmax(30px,auto)] grid-cols-10 items-center space-x-3">
        <span className="col-[1/3]">기준 인원</span>
        <div className="col-[3/11] flex h-full">
          <button
            onClick={() => peopleHandler('baseGuestNumber', 'minus')}
            type="button"
            className="rounded-bl-md rounded-tl-md border-2 border-zinc-200 px-1 dark:border-none dark:bg-zinc-600"
          >
            <Minus className="h-4 w-4" />
          </button>
          <input
            type="number"
            className="flex-1 border-y-2 px-2 outline-none dark:border-none"
            {...register('baseGuestNumber')}
          />
          <button
            onClick={() => peopleHandler('baseGuestNumber', 'plus')}
            type="button"
            className="rounded-br-md rounded-tr-md border-2 border-zinc-200 px-1 dark:border-none dark:bg-zinc-600"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="grid w-full auto-rows-[minmax(30px,auto)] grid-cols-10 items-center space-x-3">
        <span className="col-[1/3]">최대 인원</span>
        <div className="col-[3/11] flex h-full">
          <button
            onClick={() => peopleHandler('maximumGuestNumber', 'minus')}
            type="button"
            className="rounded-bl-md rounded-tl-md border-2 border-zinc-200 px-1 dark:border-none dark:bg-zinc-600"
          >
            <Minus className="h-4 w-4" />
          </button>
          <input
            type="number"
            className="flex-1 border-y-2 px-2 outline-none dark:border-none"
            {...register('maximumGuestNumber')}
          />
          <button
            onClick={() => peopleHandler('maximumGuestNumber', 'plus')}
            type="button"
            className="rounded-br-md rounded-tr-md border-2 border-zinc-200 px-1 dark:border-none dark:bg-zinc-600"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </form>
  );
};
