import React from 'react';
import { Product } from '@/interfaces';
import Image from 'next/image';
import AddToCartBtn from './AddToCartBtn';

interface Props {
  product: Product;
}
const ProductCard = (props: Props) => {
  return (
    <div className='group relative cursor-pointer shadow px-2 py-4 rounded-sm hover:shadow-lg lg:max-h-80 lg:w-60'>
      {/* Changed bg to white, so the image fits and set it to contain.  */}
      <div className='aspect-w-1 w-full overflow-hidden rounded-sm bg-white lg:aspect-none group-hover:opacity-75 '>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          src={props.product.image}
          alt={props.product.name}
          width={400}
          height={300}
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h6 className='text-xs text-gray-800 px-2'>{props.product.name}</h6>
        </div>
        <p className='text-xs font-medium text-gray-500 px-2 border border-gray-800 rounded-sm hover:text-black'>
          {props.product.price} kr
        </p>
      </div>
      <div className='flex justify-between mt-2'>
        <AddToCartBtn product={props.product} />
      </div>
    </div>
  );
};

export default ProductCard;
