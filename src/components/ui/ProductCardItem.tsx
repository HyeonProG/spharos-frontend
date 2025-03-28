import { useSpharosSession } from '@/context/SessionContext';
import { productDataListType } from '@/types/ResponseDataTypes';
import React from 'react';

export default function ProductCardItem({
  product,
}: {
  product: productDataListType;
}) {
  // get data
  const isAuth = useSpharosSession();
  return <li>{isAuth && <button>edit</button>}</li>;
}
