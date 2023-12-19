import { ContentTitle } from './content-title';

export const Reservation = () => {
  return (
    <div className="flex flex-col grid-in-reservation">
      <ContentTitle title="예약 내역" />
      <div className="flex flex-1 items-center justify-center text-xs font-bold text-zinc-700 dark:text-zinc-400">
        예약 내역이 없습니다.
      </div>
    </div>
  );
};
