import ProductCard from '@/components/ProductCard';
import { dummyProducts } from '@/constants/dummyData';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <h2>Store</h2>
        <div className='z-10 w-full items-center justify-between font-mono text-sm lg:flex'>
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
