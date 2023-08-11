import React from 'react';
import { Product } from '@/interfaces';

interface Props {
  product: Product;
}
const ProductCard = (props: Props) => {
  return (
    <div className='group relative cursor-pointer shadow px-2 py-2 rounded-lg hover:shadow-lg lg:h-80 lg:w-60'>
    {/* Changed bg to white, so the image fits and set it to contain.  */}
    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 '>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={props.product.image}
        alt={props.product.name}
        className='h-full w-full object-contain object-center lg:h-full lg:w-full'
      />
    </div>
    <div className='mt-4 flex justify-between'>
      <div>
        <h3 className='text-sm text-gray-800 px-2'>{props.product.name}</h3>
      </div>
      <p className='text-sm font-medium text-gray-400 px-2'>
        {props.product.price} kr
      </p>
          </div>
          </div>
  );
};

export default ProductCard;
