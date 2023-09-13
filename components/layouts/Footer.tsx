import React, { FC, ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  children: string | JSX.Element | JSX.Element[] | ReactNode;
};

const Footer: FC<Props> = ({ children }: Props) => {
  return (
    <header className='bg-gradient-to-r from-black to-indigo-900 shadow p-2 flex justify-between items-center sticky top-0 z-50 h-32'>
      {children}
      <Link className='text-white py-2 px-2' href={'/'}></Link>
    </header>
  );
};

export default Footer;
