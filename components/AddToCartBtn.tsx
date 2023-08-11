'use client';
import React from 'react';
import { Product } from '@/interfaces';
import { useAppDispatch, useAppSelector } from '@/store/store';
import {
  decrement,
  increment,
  productQuantityInCartSelector,
} from '@/store/features/cartSlice';
import { Btn } from './UI/Btn';
import QuantityBtn from './QuantityBtn';

interface Props {
  product: Product;
}

const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQuantityInCartSelector(state, props.product.id)
  );

  const dispatch = useAppDispatch();

  if (!qty) {
    return (
      <Btn
        variant='outline-primary'
        onClick={() => dispatch(increment(props.product))}
      >
        Add to cart
      </Btn>
    );
  }
  return (
    <QuantityBtn
      qty={qty}
      onDecrease={() => dispatch(decrement(props.product))}
      onIncrease={() => dispatch(increment(props.product))}
    />
  );
};

export default AddToCartBtn;
