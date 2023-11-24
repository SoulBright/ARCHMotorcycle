import * as React from 'react';

import s from './Bespoke.module.scss';

import { TypeDetailSliderItems } from '../../types';

import { BespokeSliderItemsList } from './variables/BespokeSliderItemsList';
import { BespokeItemsList } from './variables/BespokeItemsList';

import { ScrollToTop } from '../../components/scrollToTop/ScrollToTop';
import { VideoComponent } from '../../components/videoComponent/VideoComponent';
import { TextComponent } from '../../components/textComponent/TextComponent';
import { ComponentSlider } from '../../components/componentSlider/ComponentSlider';
import { ImgComponent } from '../../components/imgComponent/ImgComponent';
import { BespokeSlider } from './bespokeSlider/BespokeSlider';
import { DetailSlider } from './detailSlider/DetailSlider';
import { S1_1ItemsList } from './variables/DetailSliderList';

interface IBespokeProps {
}

export const Bespoke: React.FC<IBespokeProps> = (props) => {
  const [selectItems, setSelectItems] = React.useState(S1_1ItemsList)

  const handleSlideChange = (item: TypeDetailSliderItems[]) => {
    setSelectItems(item)
  }

  return (
    <div>
      <div className={s.wrapper}>
        <ScrollToTop />
        <TextComponent
          theme='red'
          content='WARNING! The menu items, buttons, and links for "APPAREL" and "CONTACT" 
        redirect to the official website of ARCH Motorcycle company!!!'
        />
        <VideoComponent
          video='https://www.youtube.com/embed/9fq0nxyRRqM?si=LKMeVEXuFElTGHFT'
          background='bespoke/bespoke.mp4' />
        <TextComponent
          theme='light'
          content='“Our goal has always been to create a riding and ownership experience unlike any other.”'
        />
        <ComponentSlider
          main_title='BESPOKE PROCESS'
          ItemsList={BespokeItemsList}
        />
        <ImgComponent file_name='bespoke/Bespoke_img.jpg' alt='Bespoke' />
      </div>
      <BespokeSlider
        title='PREVIOUS BUILDS'
        content='Browse through ARCH 1s  &  ARCH KRGT-1 previous build galleries. Select a bike in the top row, then pan through the photos beneath.'
        ItemsList={BespokeSliderItemsList}
        selectedItem={handleSlideChange}
      />
      <DetailSlider
        ItemsList={selectItems}
      />
    </div>
  );
};
