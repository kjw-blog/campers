import { Campground, Room } from '@prisma/client';
import { create } from 'zustand';

type ModalType =
  | 'error'
  | 'create-camp'
  | 'room-manage'
  | 'room-delete'
  | 'camp-delete'
  | null;

type DataType = {
  text?: string | string[];
  title?: string;
  campId?: string;
  camp?: Campground;
  room?: Room;
};

type State = {
  isOpen: boolean;
  type: ModalType;
  data?: DataType;
};
type Action = {
  openModal: (type: ModalType, data?: DataType) => void;
  closeModal: () => void;
};

export const useModalStore = create<State & Action>((set) => ({
  isOpen: false,
  type: null,
  openModal: (type: ModalType, data = {}) => set({ type, data, isOpen: true }),
  closeModal: () => set({ type: null, isOpen: false }),
}));
