import * as React from 'react';

import s from './Ownership.module.scss';

import { PurxhaseItemsList } from './variables/PurxhaseItems';
import { OwnPhotoItemsList } from './variables/OwnPhotoItems';

import { ScrollToTop } from '../../components/scrollToTop/ScrollToTop';
import { VideoComponent } from '../../components/videoComponent/VideoComponent';
import { PhotoAndTextLeft } from '../../components/photoAndText/PhotoAndTextLeft';
import { ComponentSlider } from '../../UI/componentSlider/ComponentSlider';
import { TextComponent } from '../../components/textComponent/TextComponent';
import { PhotoAndTextRight } from '../../components/photoAndText/PhotoAndTextRight';
import { Social } from './social/Social';

interface IOwnershipProps {
}

export const Ownership: React.FC<IOwnershipProps> = (props) => {
  return (
    <div>
      <div className={s.wrapper}>
        <ScrollToTop />
        <VideoComponent
          video='https://www.youtube.com/embed/m-f5ZmMKEOE?si=UIZunDDUdf27Lg4Q'
          background='ownership/Ownership.mp4'
        />
        <PhotoAndTextLeft
          theme='dark'
          file_name='ownership/img_own.jpg'
          alt='ARCH-ownership'
          title='OWNERSHIP'
          content='ARCH Owners are passionate individuals who appreciate attention to detail, 
        quality craftsmanship and the camaraderie that riding an ARCH motorcycle with like-minded individuals provides.'
        />
        <ComponentSlider
          main_title='PURCHASE JOURNEY'
          ItemsList={PurxhaseItemsList}
        />
        <TextComponent
          theme='light'
          content='“We are passionate about providing an exceptional Ownership experience.”'
        />
        <PhotoAndTextRight
          theme='light'
          file_name='ownership/img_own_2.jpg'
          alt='EVENTS'
          title='EVENTS'
          content='ARCH Motorcycle owners are invited to ride together in carefully curated, 
        turn-key events known as ARCH Owners’ Experiences. 
        These events provide the opportunity to meet with other ARCH owners while exploring unique and adventurous roads, 
        enjoying fabulous meals, and celebrating the camaraderie of a shared passion for riding.'
        />
        <Social
          title='ARCH SOCIAL'
          content='Our owner-only social media platform enhances the ARCH community. 
       Owners frequently connect here to chat about experiences, local rides, upcoming events and more.'
          itemList={OwnPhotoItemsList}
        />
        <VideoComponent
          video='https://www.youtube.com/embed/IfFsOqNha78?si=vuI_D4eZGE3MS0fX'
          background='ownership/OWNERS_EVENT.mp4'
        />
      </div>
    </div>
  );
};
