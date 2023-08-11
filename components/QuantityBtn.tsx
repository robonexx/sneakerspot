'use client';
import React from 'react';
import { Btn } from './UI/Btn';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FiTrash } from 'react-icons/fi';

interface Props {
  onIncrease?: () => void;
  onDecrease?: () => void;
  qty?: number;
}

const QuantityBtn = (props: Props) => {
  return (
    <div className='flex gap-1 justify-center items-center text-black text-xs'>
      <Btn onClick={props.onDecrease} variant='outline-primary'>
              {props.qty === 1 ? <FiTrash /> : <AiOutlineMinus />}
      </Btn>
      <p>
        <span>{props.qty}</span>
      </p>
      <Btn onClick={props.onIncrease} variant='outline-primary'>
        <AiOutlinePlus />
      </Btn>
    </div>
  );
};

export default QuantityBtn;
