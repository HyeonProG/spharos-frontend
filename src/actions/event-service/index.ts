'use server';

import { mainBannerType } from '@/types/ResponseDataTypes';

export async function getBannerData(): Promise<mainBannerType[]> {
  const response = await fetch('/api/main-banner', {
    method: 'GET',
    cache: 'no-cache',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch main banner data');
  }
  const data = (await response.json()) as mainBannerType[];
  return data;
}
