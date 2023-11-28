import { getServerSession } from 'next-auth';

export const currentUser = async () => {
  const user = await getServerSession();
  console.log(user);

  return user?.user;
};
