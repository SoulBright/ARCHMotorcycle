import * as React from 'react';

import s from './NewsList.module.scss';

import { TypeNewsItem } from '../../../types';
import { NewsItem } from './newsItem/NewsItem';

interface INewsListProps {
  itemList: TypeNewsItem[],
}

export const NewsList: React.FC<INewsListProps> = ({ itemList }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <h1>LATEST NEWS STORIES & ARTICLES</h1>
        <p>WARNING! By opening the article or clicking on the "READ THIS" link, you will be redirected to the official website of ARCH Motorcycle company!!!</p>
      </div>
      <div className={s.container}>
        {itemList.map((item) => (
          <div key={item.file_name} className={s.item}>
            <NewsItem
              file_name={item.file_name}
              alt={item.alt}
              title={item.title}
              content={item.content}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
