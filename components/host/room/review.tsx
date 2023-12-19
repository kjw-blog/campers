import { ContentTitle } from './content-title';

export const Review = () => {
  return (
    <div className="flex flex-col grid-in-review">
      <ContentTitle title="후기" />
      <div className="flex flex-1 items-center justify-center text-xs font-bold text-zinc-700 dark:text-zinc-400">
        등록된 후기가 없습니다.
      </div>
    </div>
  );
};
