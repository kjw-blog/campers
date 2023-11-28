import { getServerSession } from 'next-auth';

export const currentUser = async () => {
  const user = await getServerSession();

  return user?.user;
};
