'use client';
import { totalCartItemsSelector } from '@/store/features/cartSlice';
import { useAppSelector } from '@/store/store';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

interface Props {
  className?: string;
}

const CartBtn = (props: Props) => {
  const totalItems = useAppSelector(totalCartItemsSelector);
  return (
    <div className={`${props.className}`}>
      <AiOutlineShoppingCart />
      {!!totalItems && (
        <span className='text-black text-mono absolute top-1 right-2 text-xs bg-yellow-400 rounded-full w-4 grid place-content-center animate-pingOnce'>
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartBtn;
