import * as React from 'react';

import s from './AboutModel.module.scss';

interface IAboutModelProps {
  theme: 'dark' | 'light',
  title: string,
  p1: string,
  p2?: string,
  file_name: string,
  alt: string,
}

export const AboutModel: React.FC<IAboutModelProps> = ({ theme, title, p1, p2, file_name, alt }) => {
  const wrapperClassName = `${s.wrapper} ${theme === 'dark' ? s.darkTheme : s.lightTheme}`;

  return (
    <div className={`${wrapperClassName}`}>
      <div className={s.container}>
        <div className={s.img_container}>
          <img src={process.env.PUBLIC_URL + `/images/${file_name}`} alt={alt} />
        </div>
        <div className={s.content}>
          <h3>{title}</h3>
          <p>{p1}</p>
          <p>{p2}</p>
        </div>
      </div>
    </div>
  );
};

