import React from 'react';
import { Product } from '@/interfaces';
import Image from 'next/image';

interface Props {
  product: Product;
}
const ProductCard = (props: Props) => {
  return (
    <div className='group relative cursor-pointer shadow px-2 py-4 rounded-lg hover:shadow-lg lg:max-h-60 lg:w-60'>
      {/* Changed bg to white, so the image fits and set it to contain.  */}
      <div className='aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 '>
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
          <h3 className='text-sm text-gray-800 px-2'>{props.product.name}</h3>
        </div>
        <p className='text-sm font-medium text-gray-500 px-2 border border-gray-800 rounded-lg hover:text-black'>
          {props.product.price} kr
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
