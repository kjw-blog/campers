import { Header } from '@/components/host/dashboard/header';

export default function CampIdDashboardPage({
  params,
}: {
  params: { campId: string };
}) {
  return (
    <>
      <Header campId={params.campId} />
    </>
  );
}
