import { getCartData } from '@/actions/cart-service';
import { cartListDataType } from '@/types/ResponseDataTypes';
import React from 'react';

export default async function page() {
  const cartData = await getCartData();
  return (
    <div>
      {cartData.map((item: cartListDataType) => (
        <div
          key={item.id}
          className="px-3 py-10 w-full bg-slate-300 text-center"
        >
          <p>상품이름 : {item.name}</p>
          <p>상품개수 : {item.quantity}</p>
          <p>상품가격 : {item.price}</p>
        </div>
      ))}
    </div>
  );
}
