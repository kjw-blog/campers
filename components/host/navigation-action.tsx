'use client';

import { Plus } from 'lucide-react';

import { TooltipWrapper } from '@/components/common/tooltip-wrapper';
import { useModalStore } from '@/store/use-modal-store';

export const NavigationAction = () => {
  const { openModal } = useModalStore();

  return (
    <TooltipWrapper label="캠핑장 추가">
      <button
        className="group flex w-full items-center justify-center"
        onClick={() => openModal('create-camp')}
      >
        <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[24px] bg-white shadow-md transition-all hover:bg-camp-middle group-hover:rounded-[16px] ">
          <Plus className="stroke-camp-heavy transition group-hover:stroke-white" />
        </div>
      </button>
    </TooltipWrapper>
  );
};
