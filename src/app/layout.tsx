import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import AuthContextProvider from '@/provider/AuthContextProvider';
import { SidebarContextProvider } from '@/context/SideBarContext';
import { Sidebar } from '@/components/ui/common/SideBar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'SPHAROS 6TH Rebuilding APP',
    template: '%s | SPHAROS 6TH Rebuilding APP',
  },
  description: '1차프로젝트 SPHAROS 6TH Rebuilding',
  icons: { icon: '/assets/images/icons/icon.png' },
  metadataBase: new URL('https://spharos5th.com'),
  openGraph: {
    url: 'https://spharos6th.com',
    title: 'SPHAROS 6TH',
    description: '1차프로젝트 SPHAROS 6TH',
    images: [{ url: '/assets/images/og/og_image.png' }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options);
  console.log('session', session);
  const isAuth = !!session?.user as boolean;
  console.log('isAuth', isAuth);
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <AuthProvider>{children}</AuthProvider> */}
        <AuthContextProvider isAuth={isAuth}>
          <SidebarContextProvider>
            <Sidebar />
            {children}
          </SidebarContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
