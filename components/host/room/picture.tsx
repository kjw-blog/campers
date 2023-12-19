import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { MoreVertical } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import { ContentTitle } from './content-title';
import { useRoomStore } from '@/store/use-room-data';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Picture = () => {
  const { room } = useRoomStore();

  const onClick = () => {
    alert('click');
  };

  return (
    <div className="flex select-none flex-col grid-in-picture">
      <ContentTitle title="객실 사진">
        <button onClick={onClick}>
          <MoreVertical className="h-4 w-4" />
        </button>
      </ContentTitle>
      <div className="flex flex-1 items-center justify-center text-xs font-bold text-zinc-700 dark:text-zinc-400">
        {/* {room?.roomImage.length === 0 && '객실 사진이 없습니다.'} */}
        <div className="relative h-full w-full">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
            loop={true}
            rewind={true}
            className="h-full w-full"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <SwiperSlide key={i} className="relative h-full w-full">
                <Image
                  src="https://utfs.io/f/e3479ef9-00ee-4e28-9a35-2da302204baa-3jsln.JPG"
                  alt="객실사진"
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
