import * as React from 'react';

import s from './Bespoke.module.scss';

import { BespokeSliderItemsList } from './variables/BespokeSliderItemsList';
import { BespokeItemsList } from './variables/BespokeItemsList';

import { ScrollToTop } from '../../UI/scrollToTop/ScrollToTop';
import { VideoComponent } from '../../UI/videoComponent/VideoComponent';
import { TextComponent } from '../../UI/textComponent/TextComponent';
import { ComponentSlider } from '../../UI/componentSlider/ComponentSlider';
import { ImgComponent } from '../../UI/imgComponent/ImgComponent';
import { BespokeSlider } from './bespokeSlider/BespokeSlider';

interface IBespokeProps {
}

export const Bespoke: React.FC<IBespokeProps> = (props) => {

  return (
    <div>
      <div className={s.wrapper}>
        <ScrollToTop />
        <VideoComponent
          video='https://www.youtube.com/embed/9fq0nxyRRqM?si=LKMeVEXuFElTGHFT'
          background='bespoke/bespoke.mp4' />
        <TextComponent theme='light' content='“Our goal has always been to create a riding and ownership experience unlike any other.”' />
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
      />
    </div>
  );
};