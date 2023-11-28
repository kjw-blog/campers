import { currentUser } from '@/lib/current-user';
import { db } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { getSession, useSession } from 'next-auth/react';

export default async function HostPage() {
  const user = await currentUser();

  return <></>;
}
