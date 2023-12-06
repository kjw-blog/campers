import { CampSidebar } from '@/components/host/camp-sidebar';
import { currentUser } from '@/lib/current-user';
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';

export default async function CampIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { campId: string };
}) {
  const user = await currentUser();

  if (!user) {
    return redirect('/login');
  }

  const campGround = await db.campground.findUnique({
    where: {
      id: params.campId,
      user: {
        id: user.id,
      },
    },
  });

  if (!campGround) {
    return redirect('/');
  }

  return (
    <div className="h-full">
      <div className="fixed inset-y-0 hidden h-full w-60 md:flex">
        <CampSidebar campId={params.campId} />
      </div>
      <main className="h-full md:pl-60">{children}</main>
    </div>
  );
}
