import { NavigationSidebar } from '@/components/host/navigation-sidebar';

export default function HostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full">
      <div className="fixed inset-y-0 z-30 hidden h-full w-[72px] flex-col md:flex">
        <NavigationSidebar />
      </div>
      <main className="flex-1 md:pl-[72px]">{children}</main>
    </div>
  );
}
