'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const theme_maps = {
  dark: (
    <Moon className="stroke-zinc-400 group-hover:fill-yellow-300 group-hover:stroke-yellow-300" />
  ),
  light: (
    <Sun className="stroke-zinc-400 group-hover:fill-orange-400 group-hover:stroke-orange-300" />
  ),
};

export const ThemeButton = () => {
  const [onMount, setOnMount] = useState(false);
  const { theme, setTheme } = useTheme();

  const themeHandler = () => {
    const changeTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(changeTheme);
  };

  useEffect(() => {
    setOnMount(true);
  }, []);

  return (
    <>
      <div
        onClick={themeHandler}
        className="group flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition  hover:bg-camp-middle"
      >
        {onMount && theme_maps[theme as 'light' | 'dark']}
      </div>
    </>
  );
};
