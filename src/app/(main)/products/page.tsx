import { getProducts } from '@/actions/product-service';
import ProductList from '@/components/pages/products/ProductList';
import { productDataList } from '@/data/dummyDatas';
import { productDataListType } from '@/types/ResponseDataTypes';
import React from 'react';

export default async function page({
  searchParams,
}: {
  searchParams: { page?: string; pageSize?: string };
}) {
  const { page, pageSize } = await searchParams;
  console.log('page', page);
  console.log('pageSize', pageSize);
  // const paramsUrl = new URLSearchParams({
  //   page: page || '1',
  //   pageSize: pageSize || '10',
  // }).toString();
  // const products = await getProducts(page, pageSize)
  const products = productDataList as productDataListType[];

  // fetch data
  return (
    <main>
      <ProductList data={products} />
    </main>
  );
}
