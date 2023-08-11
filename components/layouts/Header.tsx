import React from 'react';
import Link from 'next/link';
import CartBtn from '../CartBtn';

const Header = () => {
  return (
    <header className='bg-gradient-to-r from-black to-indigo-900 shadow p-2 flex justify-between items-center sticky top-0 z-50'>
      <Link className='text-white px-2' href={'/'}>
        Home
      </Link>
      <Link className='text-white py-2 px-2' href={'/cart'} >
        <CartBtn />
      </Link>
    </header>
  );
};

export default Header;
