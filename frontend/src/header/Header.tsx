import * as React from 'react';
import { useState } from 'react';

import { MenuModal } from './menuModal/MenuModal';
import { Menu } from './menu/Menu';
import { ReactComponent as MenuIco } from './menu_burger_icon.svg';
import { MenuItems } from './variables/MenuItems';

import s from './Header.module.scss';
import '../styles/variables.scss';

const API_URL = process.env.REACT_APP_API_URL;

interface IHeaderProps { };

export const Header: React.FC<IHeaderProps> = (props) => {
  const [modalMenuIsOpen, setModalMenuIsOpen] = useState(false)

  return (
    <header>
      <div className={s.header_wrapper}>
        <div className={s.logo_container}>
          <a href={`${API_URL}`}>
            <img src={process.env.PUBLIC_URL + '/images/Logo.png'} className='logo' alt='Логотип'></img>
          </a>
        </div>
        <MenuIco className={s.menu_ico} onClick={() => setModalMenuIsOpen(true)} />
      </div>
      <div className={s.warning}>
        <h1>WARNING! The menu items, buttons, and links for "APPAREL" and "CONTACT" redirect to the official website of ARCH Motorcycle company!!!</h1>
      </div>
      <MenuModal
        isOpen={modalMenuIsOpen}
        onClose={() => setModalMenuIsOpen(false)}
      >
        <Menu
          itemList={MenuItems}
        />
      </MenuModal>

    </header>
  );
};
