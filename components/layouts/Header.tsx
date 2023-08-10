import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-gradient-to-r from-black to-indigo-900 shadow p-2 flex '>
      <Link className='text-white' href={'/'}>
        Home
      </Link>
    </header>
  );
};

export default Header;
