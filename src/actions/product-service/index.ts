import { revalidateTag } from 'next/cache';

export async function getProducts() {
  const res = await fetch('http://localhost:8080/api/v1/products', {
    next: { tags: ['getProducts', 'changePage'] },
  });

  // const res = await fetch('http://localhost:8080/api/v1/products')
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
}
