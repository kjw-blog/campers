import { PlayIcon } from 'lucide-react';
import { useState } from 'react';

import { ContentTitle } from './content-title';
import { Graph } from './graph';

const thisYear = new Date().getFullYear();

export const GraphContent = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number>(2023);

  const onClick = (type: 'prev' | 'next') => {
    setSelectedYear((prevYear) => prevYear + (type === 'prev' ? -1 : 1));
  };

  return (
    <div className="flex flex-col grid-in-graph">
      <ContentTitle title="매출 그래프">
        <div className="relative flex items-center space-x-1">
          <button onClick={onClick.bind(null, 'prev')}>
            <PlayIcon className="h-3 w-3 rotate-180 fill-zinc-700 dark:fill-zinc-400" />
          </button>
          <button className="text-sm" onClick={() => setCalendarOpen(true)}>
            {selectedYear}
          </button>
          <button
            onClick={onClick.bind(null, 'next')}
            className="group"
            disabled={selectedYear >= thisYear}
          >
            <PlayIcon className="h-3 w-3 fill-zinc-700 group-disabled:invisible  dark:fill-zinc-400" />
          </button>
          {calendarOpen && (
            <div className="absolute right-0 top-6 z-[99] rounded-md border-[1px] border-zinc-400 bg-white p-2 text-center text-sm text-zinc-600 dark:bg-dark-300 dark:text-zinc-400">
              <div className="grid auto-rows-[minmax(40px,auto)] grid-cols-[repeat(2,minmax(120px,auto))] gap-1 [&>*]:rounded-md [&>*]:duration-300">
                {Array.from({ length: 10 })
                  .map((_, i) => (
                    <button
                      onClick={() => {
                        setSelectedYear(selectedYear - i);
                        setCalendarOpen(false);
                      }}
                      className=" hover:bg-zinc-200 dark:hover:bg-zinc-700"
                      key={i}
                    >
                      {selectedYear - i}
                    </button>
                  ))
                  .reverse()}
              </div>
            </div>
          )}
        </div>
      </ContentTitle>
      <Graph />
    </div>
  );
};
