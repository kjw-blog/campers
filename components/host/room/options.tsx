'use client';

import { ContentTitle } from './content-title';

export const Options = () => {
  const onClick = () => {};

  return (
    <div className="grid-in-options flex flex-col">
      <ContentTitle title="객실 설정" onClick={onClick} />
      <div className="grid flex-1 grid-cols-2 gap-2 text-sm text-zinc-700 dark:text-zinc-400 xl:auto-rows-[1fr] xl:grid-cols-1 2xl:text-lg">
        <div className="select-none space-y-2 p-2">
          <div className="flex flex-col">
            <span className="text-xs font-bold 2xl:text-sm">최소 인원</span>
            <span>0명</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold 2xl:text-sm">최대 인원</span>
            <span>0명</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold 2xl:text-sm">
              추가 인원 요금
            </span>
            <span>0원</span>
          </div>
        </div>
        <div className="select-none space-y-2 p-2">
          <div className="flex flex-col">
            <span className="text-xs font-bold 2xl:text-sm">비성수기 가격</span>
            <span>0원</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold 2xl:text-sm">준성수기 가격</span>
            <span>0원</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold 2xl:text-sm">성수기 가격</span>
            <span>0원</span>
          </div>
        </div>
      </div>
    </div>
  );
};
