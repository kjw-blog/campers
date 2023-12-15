import { MoreVertical } from 'lucide-react';

interface ContentTitleProps {
  title: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const ContentTitle = ({ title, onClick }: ContentTitleProps) => {
  return (
    <header className="flex h-10 w-full items-center justify-between bg-zinc-300 px-2 dark:bg-zinc-800">
      <span className="select-none font-bold text-zinc-700 dark:text-zinc-400">
        {title}
      </span>
      {onClick && (
        <button onClick={onClick}>
          <MoreVertical className="h-4 w-4" />
        </button>
      )}
    </header>
  );
};
