import { CartItem } from '@/interfaces';
import React from 'react';
import Image from 'next/image';
import QuantityBtn from './QuantityBtn';
import { useAppDispatch } from '@/store/store';
import { decrement, increment } from '@/store/features/cartSlice';

interface Props {
  cartItem: CartItem;
}

const CartItemsCard = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className='grid grid-cols-4 items-center py-2 px-1 shadow hover:shadow-lg justify-between'>
      <Image
        src={cartItem.product.image}
        alt={cartItem.product.name}
        width={228}
        height={168}
      />
      <div className='py-4 px-2 text-start'>
        <h6 className='text-slate-800 text-sm'> {cartItem.product.name}</h6>
        <p className='text-slate-800 text-xs'>{cartItem.product.price}</p>
      </div>
      <QuantityBtn
        qty={cartItem.quantity}
        onDecrease={() => dispatch(decrement(cartItem.product))}
        onIncrease={() => dispatch(increment(cartItem.product))}
      />
      <div className='flex flex-col justify-normal gap-2 w-full px-2 '>
        <p className='text-black text-xs text-mono'>
          Antal:<span className='px-2'>{cartItem.quantity}</span>
        </p>
        <p className='text-black text-xs text-mono'>
          Summa: {cartItem.quantity * cartItem.product.price} kr
        </p>
      </div>
    </div>
  );
};

export default CartItemsCard;
