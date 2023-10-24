import * as React from 'react';
import { useEffect } from 'react';

import s from './Home.module.scss';

import { ReactComponent as ToTopIco } from './to-top-icon.svg';
import { VideoComponent } from '../../UI/videoComponent/VideoComponent';
import { Preview } from './components/preview/Preview';
import { ModelRange } from './components/modelRange/ModelRange';
import { Benefits } from './components/benefits/Benefits';
import { MadeIn } from './components/madeIn/MadeIn';
import { Apparel } from './components/apparel/Apparel';
import { ScrollToTop } from '../../UI/scrollToTop/ScrollToTop';

interface IHomeProps {};

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
        title='About arch'
        content='At ARCH Motorcycle we employ creativity and innovation to challenge conventional motorcycle design. 
        We are driven by passion and a relentless commitment to develop the next chapter in the story of American motorcycling.'
      />
      <MadeIn />
      <Apparel />
    </div>
  );
};
