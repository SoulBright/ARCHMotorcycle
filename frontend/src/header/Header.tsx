import * as React from 'react';
import { useState } from 'react';

import { MenuModal } from './menuModal/MenuModal';
import { Menu } from './menu/Menu';
import { ReactComponent as MenuIco } from './menu_burger_icon.svg';

import s from './Header.module.scss';
import '../styles/variables.scss'

interface IHeaderProps { }

export const Header: React.FC<IHeaderProps> = (props) => {
  const [modalMenuIsOpen, setModalMenuIsOpen] = useState(false)

  return (
    <header>
      <div className={s.header_wrapper}>
        <div className={s.logo_container}>
          <a href='http://localhost:3000/'>
            <img src={process.env.PUBLIC_URL + '/images/Logo.png'} className='logo' alt='Логотип'></img>
          </a>
        </div>
        <MenuIco className={s.menu_ico} onClick={() => setModalMenuIsOpen(true)} />
      </div>
      <MenuModal
        isOpen={modalMenuIsOpen}
        onClose={() => setModalMenuIsOpen(false)}
      >
        <Menu />
      </MenuModal>

    </header>
  );
};
