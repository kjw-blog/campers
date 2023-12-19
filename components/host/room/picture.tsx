import { ContentTitle } from './content-title';

export const Picture = () => {
  return (
    <div className="flex flex-col grid-in-picture">
      <ContentTitle title="객실 사진" />
      <div className="flex flex-1 items-center justify-center text-xs font-bold text-zinc-700 dark:text-zinc-400">
        객실 사진이 없습니다.
      </div>
    </div>
  );
};
