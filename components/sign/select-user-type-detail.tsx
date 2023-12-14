import { UserType } from '@prisma/client';
import { Tent, Backpack } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';

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
  const divRef = useRef<HTMLDivElement>(null);
  const { kr, description, Icon } = typeMaps[type];
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });

  const onMouseMove = ({ clientX, clientY }: React.MouseEvent) => {
    if (divRef.current) {
      const { x, y, width, height } = divRef.current.getBoundingClientRect();

      const widthHalf = width / 2;
      const heightHalf = height / 2;

      const xValue = (~~(clientX - x - widthHalf) / 10) * -1;
      const yValue = (~~(clientY - y - heightHalf) / 10) * -1;

      setTranslate({
        x: xValue,
        y: yValue,
      });
    }
  };

  const onMouseLeave = () => {
    setTranslate({
      x: 0,
      y: 0,
    });
  };

  return (
    <Link
      // href={`/signup?type=${type}`}
      href={`/signup${type === 'HOST' ? '?type=HOST' : ''}`}
      onClick={() => {
        if (type === 'GUEST') alert('게스트 페이지는 현재 준비 중입니다.');
      }}
      className="group flex h-60 flex-1 cursor-pointer select-none flex-col overflow-hidden rounded-md border border-zinc-300 transition duration-500 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-dark_md"
    >
      <div
        ref={divRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="flex flex-1 items-center justify-center border-b-[1px] transition group-hover:bg-camp-heavy dark:border-zinc-400 dark:bg-dark-300"
      >
        <div
          style={{
            transform: `translate(${translate.x}px,${translate.y}px)`,
          }}
          className="flex flex-col items-center justify-center space-y-2"
        >
          <Icon className="h-12 w-12 stroke-camp-heavy transition group-hover:stroke-white md:h-16 md:w-16" />
          <div className="h-1 w-12 rounded-full bg-zinc-400 blur-sm group-hover:bg-zinc-700" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 py-2 dark:bg-dark-200">
        <p className="text-sm font-semibold text-camp-heavy">{kr}</p>
        <p className="text-[10px] text-zinc-700 dark:text-zinc-400 md:text-xs">
          {description}
        </p>
      </div>
    </Link>
  );
};
