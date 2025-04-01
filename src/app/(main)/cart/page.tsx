import { getCartData } from '@/actions/cart-service';
import CartList from '@/components/pages/cart/CartList';
import CartListAllChecker from '@/components/pages/cart/CartListAllChecker';
import React from 'react';

export default async function page() {
  const cartData = await getCartData();
  const totalPrice = cartData.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const allChecked = cartData.every((item) => item.checked);
  console.log('cartData', cartData);
  console.log('totalPrice', totalPrice);
  console.log('allChecked', allChecked);
  return (
    <main className="w-full">
      <CartListAllChecker checked={allChecked} />
      <CartList data={cartData} />
      <p className="text-3xl text-center">total: {totalPrice}</p>
    </main>
  );
}
