import * as React from 'react';

import s from './BespokeSliderItems.module.scss';

interface IBespokeSliderItemsProps {
  sl_number: number,
  sl_lengs: number,
  file_name: string,
  alt: string,
}

export const BespokeSliderItems: React.FC<IBespokeSliderItemsProps> = ({ sl_number, sl_lengs, file_name, alt }) => {
  return (
      <div className={s.wrapper}>
        <div className={s.number}>{sl_number}/{sl_lengs}</div>
        <img src={process.env.PUBLIC_URL + `/images/${file_name}`} alt={alt} />
      </div>
  );
};
