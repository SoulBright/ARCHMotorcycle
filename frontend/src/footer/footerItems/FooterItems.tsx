import * as React from 'react';

import s from './FooterItems.module.scss';

interface IFooterItemsProps {
    title: string,
    children: React.ReactNode,
};

export const FooterItems: React.FC<IFooterItemsProps> = ({title, children}) => {
    return (
      <div className={s.footer_items}>
        <h4 className={s.title}>{title}</h4>
        <div className={s.content}>{children}</div>
      </div>
    );
};
