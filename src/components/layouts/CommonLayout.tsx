import { cn } from '@/lib/utils';
import React from 'react';

function SectionInnerPadding({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <section className={cn('px-4 py-10', className)}>{children}</section>;
}

function SectionNoPadding({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <section className={cn('px-4 py-10', className)}>{children}</section>;
}

export const CommonLayout = {
  SectionInnerPadding,
  SectionNoPadding,
};
