import * as React from 'react';
import { TypeMenu } from '../../types'

import s from './Menu.module.scss';


interface IMenuProps {
  itemList: TypeMenu[],
}

export const Menu: React.FC<IMenuProps> = ({itemList}) => {

  return (
    <nav>
      <div className={s.menu}>
        {itemList.map((item) => (
          <div key={item.id} className={s.menu_items}>
            <a href={item.url}>{item.title}</a>
          </div>
        ))}
      </div>
    </nav>
  );
};
