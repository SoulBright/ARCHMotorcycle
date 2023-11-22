import * as React from 'react';
import { NewsList } from './newsList/NewsList';
import { NewsItemList } from './variables/NewsItemList';

interface INewsProps {
}

export const News: React.FC<INewsProps> = (props) => {
  return (
    <div>
      <NewsList
        itemList={NewsItemList}
      />
    </div>
  );
};
