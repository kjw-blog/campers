'use client';

import { cn } from '@/lib/utils';
import { LayoutDashboard } from 'lucide-react';
import { usePathname } from 'next/navigation';

export const DashboardButton = () => {
  const path = usePathname();

  const isDashboard = path.split('/').pop() === 'dashboard';

  return (
    <button
      className={cn(
        'group flex h-12 w-full items-center space-x-1 px-3 transition',
        isDashboard
          ? 'bg-zinc-700/10 dark:bg-zinc-700/50'
          : 'hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50',
      )}
    >
      <LayoutDashboard className="h-4 w-4" />
      <span className="text-sm font-bold">대시보드</span>
    </button>
  );
};
