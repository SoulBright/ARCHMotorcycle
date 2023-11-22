import * as React from 'react';

import s from './NewsList.module.scss';

import { TypeNewsItem } from '../../../types';
import { NewsItem } from './newsItem/NewsItem';

interface INewsListProps {
  itemList: TypeNewsItem[],
}

export const NewsList: React.FC<INewsListProps> = ({ itemList }) => {
  return (
    <div className={s.wrapper} >
      {itemList.map((item) => (
        <NewsItem
          file_name={item.file_name}
          alt={item.alt}
          title={item.title}
          content={item.content}
          link={item.link}
        />
      ))}
    </div>
  );
};
