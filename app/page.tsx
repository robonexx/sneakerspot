import ProductCard from '@/components/ProductCard';
import { dummyProducts } from '@/constants/dummyData';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:max-w-5xl'>
      <div>
        <h2>Store</h2>
        <div className='z-10 w-full flex flex-wrap gap-10 font-mono text-sm lg:flex'>
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
