import * as React from 'react';

import s from './MyButton.module.scss'

interface IMyButtonProps {}

export const MyButton: React.FC<IMyButtonProps> = (props) => {
  return (
    <button {...props} className={s.myBtn}>
      DISCOVER MORE
    </button>
  );
};
