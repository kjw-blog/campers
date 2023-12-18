import { PlayIcon } from 'lucide-react';
import { useState } from 'react';

import { ContentTitle } from './content-title';
import { Graph } from './graph';

const thisYear = new Date().getFullYear();

export const GraphContent = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2023);

  const onClick = (type: 'prev' | 'next') => {
    setSelectedYear((prevYear) => prevYear + (type === 'prev' ? -1 : 1));
  };

  return (
    <div className="flex flex-col grid-in-graph">
      <ContentTitle title="매출 그래프">
        <div className="flex items-center space-x-1">
          <button onClick={onClick.bind(null, 'prev')}>
            <PlayIcon className="h-3 w-3 rotate-180 fill-zinc-700 dark:fill-zinc-400" />
          </button>
          <button className="text-sm">{selectedYear}</button>
          <button
            onClick={onClick.bind(null, 'next')}
            className="group"
            disabled={selectedYear >= thisYear}
          >
            <PlayIcon className="h-3 w-3 fill-zinc-700 group-disabled:invisible  dark:fill-zinc-400" />
          </button>
        </div>
      </ContentTitle>
      <Graph />
    </div>
  );
};
