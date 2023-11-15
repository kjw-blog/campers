import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { getServerSession } from 'next-auth';

import AuthProvider from '@/components/providers/auth-provider';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '캠퍼스',
  description: '캠핑 플랫폼',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={font.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
