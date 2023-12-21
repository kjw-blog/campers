import { useState } from 'react';
import { Loader2 } from 'lucide-react';

import { useModalStore } from '@/store/use-modal-store';
import { Modal } from './modal';
import { Checkbox } from '@/components/common/checkbox';
import Image from 'next/image';

const dummy_data = [
  {
    imageSrc:
      'https://utfs.io/f/e3479ef9-00ee-4e28-9a35-2da302204baa-3jsln.JPG',
    name: '이미지이미지이미지이미지이미지이미지',
    id: 'item_ 1',
  },
  {
    imageSrc:
      'https://utfs.io/f/e3479ef9-00ee-4e28-9a35-2da302204baa-3jsln.JPG',
    name: '이미지 2',
    id: 'item_ 2',
  },
  {
    imageSrc:
      'https://utfs.io/f/e3479ef9-00ee-4e28-9a35-2da302204baa-3jsln.JPG',
    name: '이미지 3',
    id: 'item_ 3',
  },
  {
    imageSrc:
      'https://utfs.io/f/e3479ef9-00ee-4e28-9a35-2da302204baa-3jsln.JPG',
    name: '이미지 4',
    id: 'item_ 4',
  },
  {
    imageSrc:
      'https://utfs.io/f/e3479ef9-00ee-4e28-9a35-2da302204baa-3jsln.JPG',
    name: '이미지 5',
    id: 'item_ 5',
  },
  {
    imageSrc:
      'https://utfs.io/f/e3479ef9-00ee-4e28-9a35-2da302204baa-3jsln.JPG',
    name: '이미지 6',
    id: 'item_ 6',
  },
  {
    imageSrc:
      'https://utfs.io/f/e3479ef9-00ee-4e28-9a35-2da302204baa-3jsln.JPG',
    name: '이미지 7',
    id: 'item_ 7',
  },
  {
    imageSrc:
      'https://utfs.io/f/e3479ef9-00ee-4e28-9a35-2da302204baa-3jsln.JPG',
    name: '이미지 8',
    id: 'item_ 8',
  },
  {
    imageSrc:
      'https://utfs.io/f/e3479ef9-00ee-4e28-9a35-2da302204baa-3jsln.JPG',
    name: '이미지 9',
    id: 'item_ 9',
  },
  {
    imageSrc:
      'https://utfs.io/f/e3479ef9-00ee-4e28-9a35-2da302204baa-3jsln.JPG',
    name: '이미지 10',
    id: 'item_10',
  },
];

export const AddImageModal = () => {
  const { isOpen, type, closeModal } = useModalStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState(dummy_data);
  const [checkedItem, setCheckedItem] = useState<string[]>([]);

  const open = isOpen && type === 'room-add-image';

  const onAllChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckedItem(data.map((item) => item.id));
    } else {
      setCheckedItem([]);
    }
  };

  const onSingleChecked = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    if (e.target.checked) {
      setCheckedItem((prev) => [...prev, id]);
    } else {
      const filteredItem = checkedItem.filter((item) => item !== id);
      setCheckedItem(filteredItem);
    }
  };

  return (
    <Modal open={open} onClose={closeModal}>
      <div className="z-50 flex w-[500px] max-w-[100%] flex-col gap-0 space-y-2 overflow-hidden rounded-md p-0 dark:bg-dark-200">
        <header>
          <div className="bg-camp-heavy py-3 pl-4 text-left text-sm font-bold text-white">
            객실 사진
          </div>
        </header>
        <div className="relative flex max-h-[460px] w-full select-none flex-col p-3 text-zinc-600 dark:text-zinc-400">
          <div className="grid h-[60px] w-[calc(100%-10px)] grid-cols-[repeat(13,1fr)] items-center justify-items-center border-b-[1px] border-zinc-700 text-sm font-bold dark:border-zinc-400">
            <Checkbox
              checked={data.length === checkedItem.length}
              onChange={onAllChecked}
              className="col-[1/2]"
            />
            <div className="col-[2/8]">이미지 명</div>
            <div className="col-[8/14]">이미지</div>
          </div>
          <div className="w-full flex-1 divide-y-[1px] divide-zinc-700 overflow-y-auto text-xs font-bold dark:divide-zinc-400">
            {data.map((image) => (
              <div
                key={image.id}
                className="grid h-[80px] w-full grid-cols-[repeat(13,1fr)] items-center justify-items-center py-2"
              >
                <Checkbox
                  onChange={(e) => onSingleChecked(e, image.id)}
                  checked={checkedItem.includes(image.id)}
                  className="col-[1/2]"
                />
                <div className="col-[2/8] w-full px-2">
                  <span
                    title={image.name}
                    className="block w-full overflow-hidden text-ellipsis whitespace-nowrap text-center"
                  >
                    {image.name}
                  </span>
                </div>
                <div className="relative col-[8/14] h-full w-full bg-teal-50">
                  <Image
                    src="https://utfs.io/f/e3479ef9-00ee-4e28-9a35-2da302204baa-3jsln.JPG"
                    alt="객실사진"
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
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
