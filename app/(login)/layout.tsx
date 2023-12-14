import { ThemeButton } from '@/components/common/theme-button';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-full flex-col items-center justify-center transition dark:bg-dark-400 md:space-y-4">
      <div className="hidden md:block">
        <h3 className="mb-4 select-none text-[48px] font-bold text-camp-heavy transition dark:text-white">
          Campers
        </h3>
        <div className="absolute right-2 top-4">
          <ThemeButton />
        </div>
      </div>
      <div className="fixed left-0 top-0 m-0 flex h-12 w-full items-center justify-center border-b-[1px] border-zinc-300 dark:border-zinc-500 md:hidden">
        <h3 className="select-none text-2xl font-bold text-camp-heavy transition dark:text-white">
          Campers
        </h3>
        <div className="absolute right-2 top-[50%] -translate-y-[50%]">
          <ThemeButton className="h-[32px] w-[32px]" icon="w-4 h-4" />
        </div>
      </div>
      {children}
    </div>
  );
}
