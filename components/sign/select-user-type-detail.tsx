import { UserType } from '@prisma/client';
import { Tent, Backpack } from 'lucide-react';
import Link from 'next/link';

interface SelectUserTypeDetailProps {
  type: UserType;
}

const typeMaps = {
  GUEST: {
    kr: '게스트',
    description: '게스트로 가입합니다.',
    Icon: Backpack,
  },
  HOST: {
    kr: '호스트',
    description: '캠핑장 호스트로 가입합니다.',
    Icon: Tent,
  },
};

export const SelectUserTypeDetail = ({ type }: SelectUserTypeDetailProps) => {
  const { kr, description, Icon } = typeMaps[type];

  return (
    <Link
      href={`/signup?type=${type}`}
      className="dark:hover:shadow-dark_md group flex h-60 flex-1 cursor-pointer select-none flex-col overflow-hidden rounded-md border border-zinc-300 transition duration-500 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="flex flex-1 items-center justify-center border-b-[1px] transition group-hover:bg-camp-heavy dark:border-zinc-400 dark:bg-dark-200">
        <Icon className="h-16 w-16 stroke-camp-heavy transition group-hover:scale-125 group-hover:stroke-white" />
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 py-2 dark:bg-dark-100">
        <p className="font-semibold text-camp-heavy">{kr}</p>
        <p className="text-xs text-zinc-700 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </Link>
  );
};
