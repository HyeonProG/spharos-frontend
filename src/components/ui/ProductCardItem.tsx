import { useSpharosSession } from '@/context/SessionContext';
import { productDataListType } from '@/types/ResponseDataTypes';
import React from 'react';

export default function ProductCardItem({
  product,
}: {
  product: productDataListType;
}) {
  // get data
  // const isAuth = useSpharosSession();
  return (
    <li className="px-3 py-3 w-full bg-slate-300 text-center">
      {product.productCode}
    </li>
  );
}
