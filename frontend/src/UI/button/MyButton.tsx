import * as React from 'react';

import s from './MyButton.module.scss'

interface IMyButtonProps {
  theme: 'dark' | 'light',
}

export const MyButton: React.FC<IMyButtonProps> = (props) => {
  const ButtonClassName = `.myBtn ${props.theme === 'dark' ? s.darkTheme : s.lightTheme}`;
  return (
    <button {...props} className={ButtonClassName}>
      DISCOVER MORE
    </button>
  );
};
