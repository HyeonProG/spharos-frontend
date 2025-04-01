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


https://www.coupang.com/np/search?q=%EC%86%8C%EA%B8%88%EB%B9%B5&channel=user&component=&eventCategory=SRP&trcid=&traid=&sorter=scoreDesc&minPrice=&maxPrice=&priceRange=&filterType=&listSize=36&filter=&isPriceRange=false&brand=&offerCondition=&rating=0&page=4&rocketAll=false&searchIndexingToken=1=9&backgroundColor=