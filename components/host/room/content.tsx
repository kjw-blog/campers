'use client';

import { GraphContent } from './graph-content';
import { Picture } from './picture';
import { Reservation } from './reservation';
import { Service } from './service';
import { Options } from './options';
import { Review } from './review';
import { RoomWithImageAndReview } from '@/types/types';
import { useRoomStore } from '@/store/use-room-data';
import { useEffect } from 'react';

interface ContentProps {
  room: RoomWithImageAndReview;
}

export const Content = ({ room }: ContentProps) => {
  const { setRoom } = useRoomStore();

  useEffect(() => {
    setRoom(room);
  }, [room, setRoom]);

  return (
    <div className="grid auto-rows-[minmax(200px,1fr)] grid-cols-1 gap-[10px] p-4 grid-areas-roomMobile dark:bg-dark-200 md:h-[calc(100%-48px)] md:auto-rows-[1fr] md:grid-cols-4 md:grid-areas-roomMd xl:grid-areas-roomXl 2xl:grid-cols-12 2xl:grid-areas-room [&>*]:overflow-hidden [&>*]:rounded-md [&>*]:bg-zinc-700/10 [&>*]:shadow-md [&>*]:dark:bg-dark-300 ">
      <GraphContent />
      <Picture />
      <Reservation />
      <Service />
      <Options />
      <Review />
    </div>
  );
};
