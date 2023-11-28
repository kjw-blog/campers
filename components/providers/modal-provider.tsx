'use client';

import { useEffect, useState } from 'react';

import { InitialCampModal } from '@/components/modal/initial-camp-modal';
import { ErrorModal } from '@/components/modal/error-modal';

export const ModalProvider = () => {
  const [onMount, setOnMount] = useState(false);

  useEffect(() => {
    setOnMount(true);
  }, []);

  if (!onMount) return;

  return (
    <>
      <ErrorModal />
    </>
  );
};
