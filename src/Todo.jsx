import React from 'react';
import { BiPencil } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import './style.css'; // Добавлен импорт файла со стилями

export default function Todo({ title }) {
  const [done, setDone] = React.useState(false);

  return (
    <div className='border-4'>
      <p className={done ? 'red' : ''}>{title}</p>
      <div className='div-10'>
        <input type='checkbox' onClick={() => setDone(!done)} />
        <BiPencil />
        <RiDeleteBin5Line />
      </div>
    </div>
  );
}