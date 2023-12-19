import { YearCalendar } from '@/components/common/year-calendar';
import { ContentTitle } from './content-title';
import { Graph } from './graph';
import { useEffect, useState } from 'react';

const defaultData = [
  {
    month: '1월',
    value: 12.9,
  },
  {
    month: '2월',
    value: 15.7,
  },
  {
    month: '3월',
    value: 14.1,
  },
  {
    month: '4월',
    value: 142.5,
  },
  {
    month: '5월',
    value: 52.9,
  },
  {
    month: '6월',
    value: 42.9,
  },
  {
    month: '7월',
    value: 72.4,
  },
  {
    month: '8월',
    value: 58.9,
  },
  {
    month: '9월',
    value: 22.9,
  },
  {
    month: '10월',
    value: 8.7,
  },
  {
    month: '11월',
    value: 112.4,
  },
  {
    month: '12월',
    value: 81.9,
  },
];

const thisYear = new Date().getFullYear();

export const GraphContent = () => {
  const [selectedYear, setSelectedYear] = useState<number>(thisYear);
  const [data, setData] =
    useState<{ month: string; value: number }[]>(defaultData);

  useEffect(() => {
    const newData = Array.from({ length: 12 }).map((_, i) => {
      return {
        month: i + 1 + '월',
        value: Math.ceil(Math.random() * 1000) / 10,
      };
    });

    setData(newData);
  }, [selectedYear]);

  return (
    <div className="flex flex-col grid-in-graph">
      <ContentTitle title="매출 그래프">
        <YearCalendar
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          thisYear={thisYear}
        />
      </ContentTitle>
      <Graph data={data} />
    </div>
  );
};
