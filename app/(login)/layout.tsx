import { ThemeButton } from '@/components/common/theme-button';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-full flex-col items-center justify-center space-y-4 transition dark:bg-dark-400">
      <h3 className="select-none text-4xl font-bold text-camp-heavy dark:text-white md:text-[48px]">
        Campers
      </h3>
      {children}
      <div className="absolute right-4 top-2">
        <ThemeButton />
      </div>
    </div>
  );
}
