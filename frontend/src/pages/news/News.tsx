import * as React from 'react';
import { NewsList } from './newsList/NewsList';
import { NewsItemList } from './variables/NewsItemList';
import { ScrollToTop } from '../../components/scrollToTop/ScrollToTop';
// import { TextComponent } from '../../components/textComponent/TextComponent';

interface INewsProps {
}

export const News: React.FC<INewsProps> = (props) => {
  return (
    <div>
      <ScrollToTop />
      {/* <TextComponent
        theme='red'
        content='DISCLAIMER! The menu items, buttons, and links for "APPAREL" and "CONTACT" 
      redirect to the official website of ARCH Motorcycle company!!!'
      /> */}
      <NewsList
        itemList={NewsItemList}
      />
    </div>
  );
};
