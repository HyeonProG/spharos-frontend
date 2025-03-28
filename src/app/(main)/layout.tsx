import MainHeader from '@/components/layouts/MainHeader';
import MainTabMenu from '@/components/layouts/MainTabMenu';
import React from 'react';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <MainHeader />
      <MainTabMenu />
      {children}
      <footer> footer</footer>
    </>
  );
}
