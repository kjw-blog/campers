import { create } from 'zustand';

type ModalType = 'error-modal' | null;

type DataType = {
  text?: string;
};

type State = {
  isOpen: boolean;
  type: ModalType;
  data?: DataType;
};
type Action = {
  openModal: (type: ModalType, data: DataType) => void;
  closeModal: () => void;
};

export const useModalStore = create<State & Action>((set) => ({
  isOpen: false,
  type: null,
  openModal: (type: ModalType, data = {}) => set({ type, data, isOpen: true }),
  closeModal: () => set({ type: null, isOpen: false }),
}));