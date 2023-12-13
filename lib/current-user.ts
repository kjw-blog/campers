import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import { getServerSession } from 'next-auth';

export const currentUser = async () => {
  const sessionData = await getServerSession(authOptions);

  if (!sessionData) return null;

  const { user, ...data } = sessionData;

  return data;
};
