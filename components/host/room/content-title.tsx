interface ContentTitleProps {
  children?: React.ReactNode;
  title: string;
}

export const ContentTitle = ({ title, children }: ContentTitleProps) => {
  return (
    <header className="flex h-10 w-full items-center justify-between bg-zinc-300 px-2 dark:bg-zinc-800">
      <span className="select-none font-bold text-zinc-700 dark:text-zinc-400">
        {title}
      </span>
      {children}
    </header>
  );
};
