import { redirect } from 'next/navigation';

import { currentUser } from '@/lib/current-user';
import { db } from '@/lib/db';
import { InitialCampModal } from '@/components/modal/initial-camp-modal';

export default async function HostPage() {
  const user = await currentUser();
  if (!user) {
    redirect('/login');
  }

  const firstCamp = await db.campground.findFirst({
    where: {
      userId: user.id,
    },
  });

  if (firstCamp) {
    redirect(`/host/camp/${firstCamp.id}`);
  }

  return <InitialCampModal />;
}
