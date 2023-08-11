'use client'
import { totalCartItemsSelector } from '@/store/features/cartSlice';
import { useAppSelector } from '@/store/store';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

interface Props {
    className?: string;
}

const CartBtn = (props: Props) => {

    const totalItems = useAppSelector(totalCartItemsSelector)
  return (
    <div className={`${props.className}`}>
          <AiOutlineShoppingCart />
          {!!totalItems && <span className='text-yellow-400 absolute top-2 right-2 text-xs bg-black rounded-full w-4 grid place-content-center '>{totalItems}</span>}
    </div>
  );
};

export default CartBtn;
