'use client';

import { Room } from '@prisma/client';
import { Check, X } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import qs from 'query-string';

import { cn } from '@/lib/utils';
import { TooltipWrapper } from '../common/tooltip-wrapper';
import { useRouter } from 'next/navigation';

interface VisibleToggleButtonProps {
  room: Room;
  campId: string;
}

export const VisibleToggleButton = ({
  room,
  campId,
}: VisibleToggleButtonProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(room.isVisible);

  const onToggle = async () => {
    setIsLoading(true);
    try {
      setToggle((prev) => !prev);

      const url = qs.stringifyUrl({
        url: '/api/host/room/visible',
        query: {
          campId: campId,
          roomId: room.id,
        },
      });

      await axios.patch(url);

      router.refresh();
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full items-center justify-between pl-2 md:pl-0">
      <span>{room.name}</span>
      <TooltipWrapper label="객실 표출 여부" side="bottom">
        <button
          disabled={isLoading}
          onClick={onToggle}
          className={cn(
            'h-6 w-12 rounded-xl  transition-all duration-300',
            toggle
              ? 'bg-camp-middle/50 shadow-[0_0_10px_#42B983,0_0_20px_#42B983,0_0_40px_#42B983]'
              : 'bg-[#CDCBCD]',
            isLoading ? 'cursor-wait' : 'cursor-pointer',
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
