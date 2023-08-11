'use client';
import CartItemsCard from '@/components/CartItemsCard';
import { useAppSelector } from '@/store/store';
import React from 'react';

const CheckoutPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  return (
    <div className='p-4 flex flex-col w-full gap-4 place-content-center'>
      {cartItems.map((item) => (
        <div key={item.product.id}>
          <CartItemsCard cartItem={item} />
        </div>
      ))}
    </div>
  );
};

export default CheckoutPage;
