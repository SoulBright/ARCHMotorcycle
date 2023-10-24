import * as React from 'react';

import s from './MyButton.module.scss';

interface IMyButtonProps {
  theme: 'dark' | 'light',
  children: React.ReactNode,
};

export const MyButton: React.FC<IMyButtonProps> = ({ children, ...props }) => {
  const ButtonClassName = `.myBtn ${props.theme === 'dark' ? s.darkTheme : s.lightTheme}`;
  return (
    <button {...props} className={ButtonClassName}>
      {children}
    </button>
  );
};
