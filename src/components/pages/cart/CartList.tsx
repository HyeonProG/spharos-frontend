import { cartListDataType } from '@/types/ResponseDataTypes';
import React from 'react';
import CartItem from './CartItem';

export default function CartList({ data }: { data: cartListDataType[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {data.map((item: cartListDataType) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
