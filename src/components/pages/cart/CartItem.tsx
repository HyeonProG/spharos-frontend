'use client';
import { cartItemCheck } from '@/actions/cart-service';
import { cartListDataType } from '@/types/ResponseDataTypes';
import React from 'react';

export default function CartItem({ item }: { item: cartListDataType }) {
  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('checked');
    cartItemCheck(item.id, e.target.checked);
  };
  return (
    <li
      key={item.id}
      className="flex px-4 py-10 w-full bg-slate-300 text-center gap-4 items-center"
    >
      <input
        type="checkbox"
        checked={item.checked}
        id={item.id.toString()}
        onChange={handleChangeCheckbox}
      />
      <div>
        <p>상품이름 : {item.name}</p>
        <p>상품개수 : {item.quantity}</p>
        <p>상품가격 : {item.price}</p>
      </div>
    </li>
  );
}
