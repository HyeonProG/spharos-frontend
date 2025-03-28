import { SectionContainer } from '@/components/ui/SectionContainer';
import React from 'react';

export default async function page({
  params,
}: {
  params: Promise<{ productName: string }>;
}) {
  const { productName } = await params;
  return (
    <SectionContainer.InnerPaddingSection className="bg-amber-300">
      {decodeURIComponent(productName)}
    </SectionContainer.InnerPaddingSection>
  );
}
