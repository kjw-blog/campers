'use client';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { Campground } from '@prisma/client';

import { cn } from '@/lib/utils';

interface NavigationItemProps {
  camp: Campground;
}

export const NavigationItem = ({ camp }: NavigationItemProps) => {
  const params = useParams();
  const router = useRouter();

  const isSelected = params?.campId === camp.id;

  const onClick = () => {
    router.push(`/host/camp/${camp.id}`);
  };

  return (
    <button
      onClick={onClick}
      className="group relative flex w-full items-center justify-center"
    >
      <div
        className={cn(
          'absolute left-0 w-[4px] rounded-r-full bg-white transition-all',
          isSelected ? 'h-[36px]' : 'h-0',
          !isSelected && 'group-hover:h-[24px]',
        )}
      />
      <div
        className={cn(
          'relative h-[48px] w-[48px] overflow-hidden rounded-[24px] transition-all ',
          isSelected ? 'rounded-[16px]' : 'group-hover:rounded-[16px]',
        )}
      >
        <Image
          src={camp.image}
          alt={camp.name}
          sizes="(min-width: 640px) 50vw, 100vw"
          fill
        />
      </div>
    </button>
  );
};
