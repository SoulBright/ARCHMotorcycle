import * as React from 'react';

import s from './BespokeSliderItems.module.scss';

interface IBespokeSliderItemsProps {
  sl_number: number,
  sl_lengs: number,
  file_name: string,
  alt: string,
  onClick?: () => void
}

export const BespokeSliderItems: React.FC<IBespokeSliderItemsProps> = ({ sl_number, sl_lengs, file_name, alt, onClick}) => {
  return (
      <div className={s.wrapper} onClick={onClick}>
        <div className={s.number}>{sl_number}/{sl_lengs}</div>
        <img src={process.env.PUBLIC_URL + `/images/${file_name}`} alt={alt} />
      </div>
  );
};
