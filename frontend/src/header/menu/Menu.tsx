import * as React from 'react';
import { TypeMenu } from '../../types'

import s from './Menu.module.scss';


interface IMenuProps {};

export const Menu: React.FC<IMenuProps> = (props) => {
  const menuItems: TypeMenu[] = [
    {
      id: 1,
      title: 'Home',
      serial_number: 1,
      url: 'http://localhost:3000/'
    },
    {
      id: 2,
      title: 'About',
      serial_number: 2,
      url: 'http://localhost:3000/about'
    },
    {
      id: 3,
      title: 'Bespoke',
      serial_number: 3,
      url: 'http://localhost:3000/bespoke'
    },
    {
      id: 4,
      title: 'Ownership',
      serial_number: 4,
      url: 'http://localhost:3000/ownership'
    },
    {
      id: 5,
      title: 'krgt-1',
      serial_number: 5,
      url: 'http://localhost:3000/arch-krgt-1/'
    },
    {
      id: 6,
      title: '1s',
      serial_number: 6,
      url: 'http://localhost:3000/arch-1s'
    },
    {
      id: 7,
      title: 'method 143',
      serial_number: 7,
      url: 'http://localhost:3000/arch-method143/'
    },
    {
      id: 8,
      title: 'apparel',
      serial_number: 8,
      url: 'https://apparel.archmotorcycle.com/'
    },
    {
      id: 9,
      title: 'news',
      serial_number: 9,
      url: 'http://localhost:3000/news'
    },
    {
      id: 10,
      title: 'contact',
      serial_number: 10,
      url: 'https://archmotorcycle.com/contact/'
    },
  ];
  return (
    <nav>
      <div className={s.menu}>
        {menuItems.map((item) => (
          <div key={item.id} className={s.menu_items}>
            <a href={item.url}>{item.title}</a>
          </div>
        ))}
      </div>
    </nav>
  );
};
