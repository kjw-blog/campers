import { currentUser } from '@/lib/current-user';
import { db } from '@/lib/db';

export default async function HostPage() {
  const user = await currentUser();

  return <></>;
}
