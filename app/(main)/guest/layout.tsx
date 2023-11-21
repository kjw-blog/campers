import { NavigationSidebar } from '@/components/customer/navigation-sidebar';

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full">
      <div className="fixed inset-y-0 z-30 h-full w-[72px] flex-col">
        <NavigationSidebar />
      </div>
      <main className="flex-1 pl-[72px]">{children}</main>
    </div>
  );
}
