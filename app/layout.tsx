import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

import AuthProvider from '@/components/providers/auth-provider';
import { ModalProvider } from '@/components/providers/modal-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';

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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <ModalProvider />
          <AuthProvider>{children}</AuthProvider>
          <div id="address-portal" />
          <div id="modal" />
          <div id="backdrop" />
        </ThemeProvider>
      </body>
    </html>
  );
}
