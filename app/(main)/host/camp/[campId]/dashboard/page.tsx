import { HostDashboardHeader } from '@/components/host/host-dashboard-header';

export default function CampIdDashboardPage({
  params,
}: {
  params: { campId: string };
}) {
  return (
    <>
      <HostDashboardHeader campId={params.campId} />
    </>
  );
}
