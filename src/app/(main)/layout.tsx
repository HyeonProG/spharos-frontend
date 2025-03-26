import MainHeader from '@/components/layouts/MainHeader';
import MainTapMenu from '@/components/layouts/MainTapMenu';
import React from 'react';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <MainHeader />
      <MainTapMenu />
      {children}
      <footer> footer</footer>
    </>
  );
}
