import AuthHeader from '@/components/layouts/AuthHeader';
import React from 'react';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AuthHeader />
      {children}
    </>
  );
}
