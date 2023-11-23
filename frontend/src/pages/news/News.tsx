import * as React from 'react';
import { NewsList } from './newsList/NewsList';
import { NewsItemList } from './variables/NewsItemList';
import { ScrollToTop } from '../../components/scrollToTop/ScrollToTop';

interface INewsProps {
}

export const News: React.FC<INewsProps> = (props) => {
  return (
    <div>
      <ScrollToTop />
      <NewsList
        itemList={NewsItemList}
      />
    </div>
  );
};
