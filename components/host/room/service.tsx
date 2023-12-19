import { ContentTitle } from './content-title';

export const Service = () => {
  return (
    <div className="flex flex-col grid-in-service">
      <ContentTitle title="시설 및 서비스" />
      <div className="flex flex-1 items-center justify-center text-xs font-bold text-zinc-700 dark:text-zinc-400">
        선택된 시설 및 서비스가 없습니다.
      </div>
    </div>
  );
};
