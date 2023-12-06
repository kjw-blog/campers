import { CampSidebar } from '@/components/host/camp-sidebar';

export default function CampIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <div className="fixed inset-y-0 hidden h-full w-60 md:flex">
        <CampSidebar />
      </div>
      <main className="h-full md:pl-60">{children}</main>
    </div>
  );
}
