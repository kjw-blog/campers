interface ContentTitleProps {
  children?: React.ReactNode;
  title: string;
}

export const ContentTitle = ({ title, children }: ContentTitleProps) => {
  return (
    <header className="flex h-10 w-full select-none items-center justify-between bg-zinc-300 px-2 text-xs font-bold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 md:!text-sm">
      <span>{title}</span>
      {children}
    </header>
  );
};
