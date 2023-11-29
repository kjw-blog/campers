import { currentUser } from '@/lib/current-user';
import { createUploadthing, type FileRouter } from 'uploadthing/next';

const f = createUploadthing();

const handleAuth = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error('유저 정보 없음');
  }
  return user;
};

export const ourFileRouter = {
  campImage: f({
    image: { maxFileSize: '4MB', maxFileCount: 1 },
  })
    .middleware(async () => await handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
