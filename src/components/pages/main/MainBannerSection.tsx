import { mainBannerType } from '@/types/ResponseDataTypes';
import React from 'react';
import Image from 'next/image';

export default function MainBannerSection({
  bannerData,
}: {
  bannerData: mainBannerType[];
}) {
  return (
    <div>
      {bannerData.map((banner) => (
        <div key={banner.id}>
          <Image
            src={banner.imgUrl}
            alt={banner.description}
            width={800}
            height={400}
          />
          <p>{banner.description}</p>
        </div>
      ))}
    </div>
  );
}
