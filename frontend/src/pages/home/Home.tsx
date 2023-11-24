import * as React from 'react';

import s from './Home.module.scss';

import { VideoComponent } from '../../components/videoComponent/VideoComponent';
import { Preview } from './components/preview/Preview';
import { ModelRange } from './components/modelRange/ModelRange';
import { Benefits } from './components/benefits/Benefits';
import { PhotoAndTextLeft } from '../../components/photoAndText/PhotoAndTextLeft';
import { Apparel } from './components/apparel/Apparel';
import { ScrollToTop } from '../../components/scrollToTop/ScrollToTop';

const API_URL = process.env.REACT_APP_API_URL;

interface IHomeProps { };

export const Home: React.FC<IHomeProps> = (props) => {
  return (
    <div>
      <ScrollToTop />
      <VideoComponent
        video='https://www.youtube.com/embed/2Qj1X1eJkqs?si=Mhf2tO21Q6sUtVR6'
        background='ARCH_Homepage_Video.mp4' />
      <Preview />
      <ModelRange />
      <Benefits
        theme='light'
        file_name_m='bespoke_mobile_img.jpg'
        file_name_l='bespoke_img.jpg'
        alt='Bespoke'
        link={`${API_URL}/bespoke`}
        title='Bespoke'
        content='There is a unique feeling walking up to your machine, 
        one that you co-designed and have entrusted us to curate. 
        We offer a truly bespoke experience by working closely with our owners to tailor the aesthetics and ergonomics of their motorcycle. 
        Our goal is to build the most immersive, compelling and bespoke motorcycle for riding enthusiasts.'
      />
      <div className={s.interruption}>
        <h2>“The next chapter in American motorcycling.”</h2>
      </div>
      <Benefits
        theme='dark'
        file_name_m='about_arch_mobile.jpg'
        file_name_l='about_arch.jpg'
        alt='About_arch'
        link={`${API_URL}/about`}
        title='About arch'
        content='At ARCH Motorcycle we employ creativity and innovation to challenge conventional motorcycle design. 
        We are driven by passion and a relentless commitment to develop the next chapter in the story of American motorcycling.'
      />
      <PhotoAndTextLeft
        theme='light'
        title='Made in California'
        content='ARCH Motorcycle planted roots in California long before the company was founded.
        The temperate climate is ideal for year-round riding and its diverse topography welcomes a sense of adventure,
        making it the perfect place for development.'
        file_name='home/Californian-dreaming.jpg'
        alt='Californian-dreaming'
      />
      <Apparel />
    </div>
  );
};
