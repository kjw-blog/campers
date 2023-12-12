'use client';

import { Room } from '@prisma/client';
import { Check, X } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { TooltipWrapper } from '../common/tooltip-wrapper';

interface VisibleToggleButtonProps {
  room: Room;
}

export const VisibleToggleButton = ({ room }: VisibleToggleButtonProps) => {
  const [toggle, setToggle] = useState(room.isVisible);

  return (
    <div className="flex w-full items-center justify-between pl-2 md:pl-0">
      <span>{room.name}</span>
      <TooltipWrapper label="객실 표출 여부" side="bottom">
        <button
          onClick={() => setToggle((prev) => !prev)}
          className={cn(
            'h-6 w-12 rounded-xl transition-all duration-300',
            toggle
              ? 'bg-camp-middle/50 shadow-[0_0_10px_#42B983,0_0_20px_#42B983,0_0_40px_#42B983]'
              : 'bg-[#CDCBCD]',
          )}
        >
          <div
            className={cn(
              'flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300',
              toggle
                ? 'translate-x-[100%] bg-camp-heavy'
                : 'translate-x-0 bg-[#787678]',
            )}
          >
            {toggle ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </div>
        </button>
      </TooltipWrapper>
    </div>
  );
};
