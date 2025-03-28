import ProductCardItem from '@/components/ui/ProductCardItem';
import { productDataListType } from '@/types/ResponseDataTypes';
import React from 'react';

export default function ProductList({ data }: { data: productDataListType[] }) {
  return (
    <ul>
      {data.map((product) => (
        <ProductCardItem key={product.productCode} product={product} />
      ))}
    </ul>
  );
}
