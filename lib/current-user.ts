import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export const currentUser = async () => {
  const user = await getServerSession(authOptions);

  return user?.user;
};
