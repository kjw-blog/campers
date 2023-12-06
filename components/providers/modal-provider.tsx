'use client';

import { useEffect, useState } from 'react';

import { ErrorModal } from '@/components/modal/error-modal';
import { CreateCampModal } from '@/components/modal/create-camp-modal';

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
    </>
  );
};
