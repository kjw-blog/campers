import { PlayIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const thisYear = new Date().getFullYear();

export const YearCalendar = () => {
  const calendarRef = useRef<HTMLDivElement>(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number>(thisYear);
  const [baseYear, setBaseYear] = useState<number>(thisYear);

  const onClick = (type: 'prev' | 'next') => {
    const addYear = type === 'prev' ? -1 : 1;

    setSelectedYear((prevYear) => prevYear + addYear);
    setBaseYear(selectedYear + addYear);
  };

  const onBasePrevClick = () => {
    setBaseYear((prev) => prev - 10);
  };

  const onBaseNextClick = () => {
    if (baseYear + 10 < thisYear) {
      setBaseYear((prev) => prev + 10);
    } else {
      setBaseYear(thisYear);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (!calendarRef.current?.contains(e.target as Node)) {
        setCalendarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={calendarRef} className="relative flex items-center space-x-2">
      <button onClick={onClick.bind(null, 'prev')}>
        <PlayIcon className="h-3 w-3 rotate-180 fill-zinc-700 dark:fill-zinc-400" />
      </button>
      <button
        className="text-sm"
        onClick={() => setCalendarOpen((prev) => !prev)}
      >
        {selectedYear}
      </button>
      <button
        onClick={onClick.bind(null, 'next')}
        className="group"
        disabled={selectedYear >= thisYear}
      >
        <PlayIcon className="h-3 w-3 fill-zinc-700 group-disabled:invisible  dark:fill-zinc-400" />
      </button>
      <AnimatePresence>
        {calendarOpen && (
          <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 10 }}
            className="absolute right-0 top-6 z-[99] rounded-md border-[1px] border-zinc-400 bg-white p-2 text-center text-sm text-zinc-600 dark:bg-dark-300 dark:text-zinc-400"
          >
            <div className="flex w-full items-center justify-between rounded-md border-b-2 border-b-zinc-400 px-3 py-2">
              <button onClick={onBasePrevClick}>
                <PlayIcon className="h-3 w-3 rotate-180 fill-zinc-700 dark:fill-zinc-400" />
              </button>
              <span>
                {baseYear - 9} ~ {baseYear}
              </span>
              <button
                onClick={onBaseNextClick}
                className="group"
                disabled={baseYear >= thisYear}
              >
                <PlayIcon className="h-3 w-3 fill-zinc-700 group-disabled:invisible dark:fill-zinc-400" />
              </button>
            </div>
            <div className="grid auto-rows-[minmax(40px,auto)] grid-cols-[repeat(2,minmax(120px,auto))] gap-1 [&>*]:rounded-md [&>*]:duration-300">
              {Array.from({ length: 10 })
                .map((_, i) => (
                  <button
                    onClick={() => {
                      setSelectedYear(baseYear - i);
                      setBaseYear(baseYear - i);
                      setCalendarOpen(false);
                    }}
                    className={cn(
                      selectedYear === baseYear - i
                        ? 'bg-zinc-200 dark:bg-zinc-700'
                        : 'hover:bg-zinc-200 dark:hover:bg-zinc-700',
                    )}
                    key={i}
                  >
                    {baseYear - i}
                  </button>
                ))
                .reverse()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
