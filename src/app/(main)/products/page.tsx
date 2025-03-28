import { productDataList } from '@/data/dummyDatas';
import { productDataListType } from '@/types/ResponseDataTypes';
import React from 'react';

export default function page() {
  // const products = await getProducts()
  const products = productDataList as productDataListType[];

  // fetch data
  return (
    <main>
      
    </main>
  );
}
