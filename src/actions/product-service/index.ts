import { revalidateTag } from 'next/cache';

export async function getProducts({
  page,
  pageSize = '20',
}: {
  page: string;
  pageSize?: string;
}) {
  const res = await fetch(
    `http://localhost:8080/api/v1/products?page=${page}&pageSize=${pageSize}`,
    {
      next: { tags: ['getProducts', 'changePage'] },
    }
  );

  // const res = await fetch('http://localhost:8080/api/v1/products')
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
