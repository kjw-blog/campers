import { RoomWithImageAndReview } from '@/types/types';
import { create } from 'zustand';

type State = {
  room: RoomWithImageAndReview | null;
};

type Action = {
  setRoom: (room: RoomWithImageAndReview) => void;
};

export const useRoomStore = create<State & Action>((set) => ({
  room: null,
  setRoom: (room) => set({ room }),
}));
