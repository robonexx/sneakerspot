'use client'
import React from 'react'
import { Product } from '@/interfaces';
import { useAppSelector } from '@/store/store';
import { productQuantityInCartSelector } from '@/store/features/cartSlice';
import { Btn } from './UI/Btn';


interface Props{
    product: Product;
}

const AddToCartBtn = (props: Props) => {
    const qty = useAppSelector(state => productQuantityInCartSelector(state, props.product.id))
    if (!qty) {
        return (
            <Btn variant='outline-primary'>
                Add to cart
            </Btn>
        )
    }
  return (
      <button>
          
    </button>
  )
}

export default AddToCartBtn