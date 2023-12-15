import qs from 'query-string';
import { zodResolver } from '@hookform/resolvers/zod';
import { Minus, Plus } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';

import { useRoomStore } from '@/store/use-room-data';

const Form = z.object({
  baseGuestNumber: z
    .number({ invalid_type_error: '기준 인원은 최소 1명 이상 이어야 합니다.' })
    .gt(0, { message: '기준 인원은 최소 1명 이상 이어야 합니다.' }),
  maximumGuestNumber: z
    .number({ invalid_type_error: '기준 인원은 최소 1명 이상 이어야 합니다.' })
    .gt(0, { message: '최대 인원은 최소 1명 이상 이어야 합니다.' }),
  additionalPrice: z.number({
    invalid_type_error: '올바른 값을 입력해 주세요.',
  }),
  peakSeasonPrice: z
    .number({
      invalid_type_error: '성수기 가격은 최소 1원 이상 이어야 합니다.',
    })
    .gt(0, { message: '성수기 가격은 최소 1원 이상 이어야 합니다.' }),
  semiPeakSeasonPrice: z
    .number({
      invalid_type_error: '준성수기 가격은 최소 1원 이상 이어야 합니다.',
    })
    .gt(0, { message: '준성수기 가격은 최소 1원 이상 이어야 합니다.' }),
  offSeasonPrice: z
    .number({
      invalid_type_error: '비성수기 가격은 최소 1원 이상 이어야 합니다.',
    })
    .gt(0, { message: '비성수기 가격은 최소 1원 이상 이어야 합니다.' }),
});

interface OptionsFormProps {
  onSubmitting: (value: boolean) => void;
  onClose: () => void;
}

export const OptionsForm = ({ onSubmitting, onClose }: OptionsFormProps) => {
  const { room } = useRoomStore();
  const router = useRouter();
  const { campId, roomId } = useParams();

  const {
    watch,
    setValue,
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<z.infer<typeof Form>>({
    resolver: zodResolver(Form),
    defaultValues: {
      additionalPrice: 0,
      maximumGuestNumber: 0,
      baseGuestNumber: 0,
      offSeasonPrice: 0,
      peakSeasonPrice: 0,
      semiPeakSeasonPrice: 0,
    },
  });

  const onValid = async (data: z.infer<typeof Form>) => {
    try {
      const url = qs.stringifyUrl({
        url: '/api/host/room/options',
        query: {
          campId,
          roomId,
        },
      });

      await axios.patch(url, data);

      reset();
      router.refresh();
      onClose();
    } catch (e) {
      console.log(e);
    }
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
      setValue(otherName, Number(value + 1));
    }

    if (
      type === 'minus' &&
      name === 'maximumGuestNumber' &&
      value - 1 < otherValue
    ) {
      setValue(otherName, Number(value - 1));
    }

    setValue(name, Number(value + (type === 'plus' ? 1 : -1)));
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
        <span className="col-[1/4] md:col-[1/3]">기준 인원</span>
        <div className="col-[4/11] flex h-full md:col-[3/11]">
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
        {errors?.baseGuestNumber && (
          <p className="col-[1/11] row-[2/3] text-left text-[10px] text-rose-500">
            {errors?.baseGuestNumber.message}
          </p>
        )}
      </div>
      <div className="grid w-full auto-rows-[minmax(30px,auto)] grid-cols-10 items-center space-x-3">
        <span className="col-[1/4] md:col-[1/3]">최대 인원</span>
        <div className="col-[4/11] flex h-full md:col-[3/11]">
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
        {errors?.maximumGuestNumber && (
          <p className="col-[1/11] row-[2/3] text-left text-[10px] text-rose-500">
            {errors?.maximumGuestNumber.message}
          </p>
        )}
      </div>
      <div className="grid w-full auto-rows-[minmax(30px,auto)] grid-cols-10 items-center space-x-3">
        <span className="col-[1/4] md:col-[1/3]">추가 인원 요금</span>
        <div className="col-[4/11] flex h-full md:col-[3/11]">
          <input
            type="number"
            className="flex-1 rounded-md border-2 px-2 outline-none dark:border-none"
            {...register('additionalPrice', { valueAsNumber: true })}
          />
        </div>
        {errors?.additionalPrice && (
          <p className="col-[1/11] row-[2/3] text-left text-[10px] text-rose-500">
            {errors?.additionalPrice.message}
          </p>
        )}
      </div>
      <div className="grid w-full auto-rows-[minmax(30px,auto)] grid-cols-10 items-center space-x-3">
        <span className="col-[1/4] md:col-[1/3]">비성수기 가격</span>
        <div className="col-[4/11] flex h-full md:col-[3/11]">
          <input
            type="number"
            className="flex-1 rounded-md border-2 px-2 outline-none dark:border-none"
            {...register('offSeasonPrice', { valueAsNumber: true })}
          />
        </div>
        {errors?.offSeasonPrice && (
          <p className="col-[1/11] row-[2/3] text-left text-[10px] text-rose-500">
            {errors?.offSeasonPrice.message}
          </p>
        )}
      </div>
      <div className="grid w-full auto-rows-[minmax(30px,auto)] grid-cols-10 items-center space-x-3">
        <span className="col-[1/4] md:col-[1/3]">준성수기 가격</span>
        <div className="col-[4/11] flex h-full md:col-[3/11]">
          <input
            type="number"
            className="flex-1 rounded-md border-2 px-2 outline-none dark:border-none"
            {...register('semiPeakSeasonPrice', { valueAsNumber: true })}
          />
        </div>
        {errors?.semiPeakSeasonPrice && (
          <p className="col-[1/11] row-[2/3] text-left text-[10px] text-rose-500">
            {errors?.semiPeakSeasonPrice.message}
          </p>
        )}
      </div>
      <div className="grid w-full auto-rows-[minmax(30px,auto)] grid-cols-10 items-center space-x-3">
        <span className="col-[1/4] md:col-[1/3]">성수기 가격</span>
        <div className="col-[4/11] flex h-full md:col-[3/11]">
          <input
            type="number"
            className="flex-1 rounded-md border-2 px-2 outline-none dark:border-none"
            {...register('peakSeasonPrice', { valueAsNumber: true })}
          />
        </div>
        {errors?.peakSeasonPrice && (
          <p className="col-[1/11] row-[2/3] text-left text-[10px] text-rose-500">
            {errors?.peakSeasonPrice.message}
          </p>
        )}
      </div>
    </form>
  );
};
