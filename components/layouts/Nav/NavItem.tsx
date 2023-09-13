import React from 'react';
import Link from 'next/link';

type NavProps = {
  href: string;
  name: string;
};

const NavItem = ({ href, name }: NavProps) => {
  return (
    <Link href={href} key={name}>
      <span className='lg:inline-flex lg:w-auto w-full px-4 lg:px-6 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white '>
        {name}
      </span>
    </Link>
  );
};

export default NavItem;
