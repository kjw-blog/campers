'use client';

import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ThemeButtonProps {
  className?: string;
  icon?: string;
}

export const ThemeButton = ({ className, icon }: ThemeButtonProps) => {
  const [onMount, setOnMount] = useState(false);
  const { theme, setTheme } = useTheme();

  const theme_maps = {
    dark: (
      <Moon
        className={cn(
          'stroke-zinc-400 group-hover:fill-yellow-300 group-hover:stroke-yellow-300',
          icon,
        )}
      />
    ),
    light: (
      <Sun
        className={cn(
          'stroke-zinc-400 group-hover:fill-orange-400 group-hover:stroke-orange-300',
          icon,
        )}
      />
    ),
  };

  const themeHandler = () => {
    const changeTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(changeTheme);
  };

  useEffect(() => {
    setOnMount(true);
  }, []);

  return (
    <div
      onClick={themeHandler}
      className={cn(
        'group flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition  hover:bg-camp-middle',
        className,
      )}
    >
      {onMount && theme_maps[theme as 'light' | 'dark']}
    </div>
  );
};
