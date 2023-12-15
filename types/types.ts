import { Room, RoomImage } from '@prisma/client';

export type RoomWithImageAndReview = Room & {
  roomImage: RoomImage[];
};
