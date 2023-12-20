'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ErrorModal = dynamic(() =>
  import('@/components/modal/error-modal').then((mod) => mod.ErrorModal),
);

const CreateCampModal = dynamic(() =>
  import('@/components/modal/create-camp-modal').then(
    (mode) => mode.CreateCampModal,
  ),
);
const RoomManageModal = dynamic(() =>
  import('@/components/modal/room-manage-modal').then(
    (mode) => mode.RoomManageModal,
  ),
);
const RoomDeleteModal = dynamic(() =>
  import('@/components/modal/room-delete-modal').then(
    (mode) => mode.RoomDeleteModal,
  ),
);
const CampDeleteModal = dynamic(() =>
  import('@/components/modal/camp-delete-modal').then(
    (mode) => mode.CampDeleteModal,
  ),
);

const RoomOptionsModal = dynamic(() =>
  import('@/components/modal/room/options-modal').then(
    (mode) => mode.OptionsModal,
  ),
);
const RoomAddImageModal = dynamic(() =>
  import('@/components/modal/room/add-image-modal').then(
    (mode) => mode.AddImageModal,
  ),
);

export const ModalProvider = () => {
  const [onMount, setOnMount] = useState(false);

  useEffect(() => {
    setOnMount(true);
  }, []);

  if (!onMount) return;

  return (
    <>
      <ErrorModal />
      <CreateCampModal />
      <RoomManageModal />
      <RoomDeleteModal />
      <CampDeleteModal />
      <RoomOptionsModal />
      <RoomAddImageModal />
    </>
  );
};
