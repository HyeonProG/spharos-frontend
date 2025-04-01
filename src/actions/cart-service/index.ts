import { cartListDataType } from '@/types/ResponseDataTypes';

export const getCartData = async () => {
  const res = await fetch('http://localhost:3300/cart', {
    next: { tags: ['getCartData'] },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json() as Promise<cartListDataType[]>;
};
