import { HostHeader } from '@/components/host/host-header';

export default function CampIdDashboardPage({
  params,
}: {
  params: { campId: string };
}) {
  return (
    <>
      <HostHeader campId={params.campId} />
    </>
  );
}
