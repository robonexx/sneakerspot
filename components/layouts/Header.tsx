import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import CartBtn from '../CartBtn';

type Props = {
  children: string | JSX.Element | JSX.Element[] | ReactNode;
};

const Header: FC<Props> = ({ children }: Props) => {
  return (
    <header className='bg-gradient-to-r from-black to-indigo-900 shadow p-2 flex justify-between items-center sticky top-0 z-50 h-16'>
      {children}
      <Link className='text-white py-2 px-2' href={'/checkout'}>
        <CartBtn />
      </Link>
    </header>
  );
};

export default Header;
