import * as React from 'react';

import s from './NewsItem.module.scss';

interface INewsItemProps {
  file_name: string
  alt: string,
  title: string
  link: string,
  content: string,
}

export const NewsItem: React.FC<INewsItemProps> = ({ file_name, alt, title, link, content }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.imgContainer}>
        <img src={process.env.PUBLIC_URL + `/images/${file_name}`} alt={alt} />
      </div>
      <div className={s.content}>
        <h2><a href={`https://archmotorcycle.com/${link}`}>{title}</a></h2>
        <p>{content}</p>
      </div>
      <a href={`https://archmotorcycle.com/${link}`}>READ THIS</a>
    </div>
  );
};
