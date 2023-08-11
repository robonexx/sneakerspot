'use client';
import React from 'react';
import { Btn } from './UI/Btn';

interface Props {
  onIncrease?: () => void;
  onDecrease?: () => void;
  qty?: number;
}

const QuantityBtn = (props: Props) => {
  return (
    <div className='flex gap-2 justify-center items-center border text-black'>
          <Btn onClick={props.onDecrease} variant='outline-primary'>-</Btn>
          <p><span>{props.qty}</span></p>
      <Btn onClick={props.onIncrease} variant='outline-primary'>+</Btn>
    </div>
  );
};

export default QuantityBtn;
