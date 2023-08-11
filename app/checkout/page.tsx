'use client';
import CartItemsCard from '@/components/CartItemsCard';
import { TotalPriceSelector } from '@/store/features/cartSlice';
import { useAppSelector } from '@/store/store';
import React from 'react';

const CheckoutPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector(TotalPriceSelector);
  return (
    <div className='p-4 flex flex-col w-full gap-4 place-content-center'>
      <h2 className='text-md text-black'>CHECKOUT</h2>
      {cartItems.map((item) => (
        <div key={item.product.id}>
          <CartItemsCard cartItem={item} />
        </div>
      ))}

      <p className='p-2 text-black text-sm text-end w-full'>Total summa: {totalPrice} kr</p>
    </div>
  );
};

export default CheckoutPage;
