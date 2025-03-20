import { getBannerData } from '@/actions/event-service';
import MainBannerSection from '@/components/pages/main/MainBannerSection';
import React from 'react';

export default async function page() {
  const bannerData = await getBannerData();

  return (
    <main>
      <MainBannerSection bannerData={bannerData} />
    </main>
  );
}
