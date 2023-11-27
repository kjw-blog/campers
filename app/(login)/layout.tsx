import { ThemeButton } from '@/components/common/theme-button';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark:bg-dark-300 relative flex h-full flex-col items-center justify-center space-y-4 transition">
      <h3 className="select-none text-[48px] font-bold text-camp-heavy dark:text-white">
        Campers
      </h3>
      {children}
      <div className="absolute right-4 top-2">
        <ThemeButton />
      </div>
    </div>
  );
}
