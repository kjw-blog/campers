import { Graph } from './graph';
import { Picture } from './picture';
import { Reservation } from './reservation';
import { Service } from './service';
import { Price } from './price';
import { Review } from './review';

export const Content = () => {
  return (
    <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-[10px] p-4 grid-areas-roomMobile dark:bg-dark-200 md:h-[calc(100%-48px)] md:auto-rows-auto md:grid-cols-4 md:grid-areas-roomMd xl:grid-areas-roomXl 2xl:grid-cols-12 2xl:grid-areas-room [&>*]:overflow-hidden [&>*]:rounded-md [&>*]:bg-zinc-700/10 [&>*]:shadow-md [&>*]:dark:bg-dark-300 ">
      <Graph />
      <Picture />
      <Reservation />
      <Service />
      <Price />
      <Review />
    </div>
  );
};
