import * as React from 'react';

import s from './Bespoke.module.scss';
import { TypeComponentSliderItems } from '../../types';

import { ScrollToTop } from '../../UI/scrollToTop/ScrollToTop';
import { VideoComponent } from '../../UI/videoComponent/VideoComponent';
import { TextComponent } from '../../UI/textComponent/TextComponent';
import { ComponentSlider } from '../../UI/componentSlider/ComponentSlider';
import { ImgComponent } from '../../UI/imgComponent/ImgComponent';

interface IBespokeProps {
}

export const Bespoke: React.FC<IBespokeProps> = (props) => {
  const BespokeItemsList: TypeComponentSliderItems[] = [
    {
      id: 1,
      title: 'YOUR CONSULTATION',
      content: 'Each owner plays an integral part in co-designing the livery of their motorcycle by working closely with our in-house designers. During the design consultation, customers collaborate with our team to discuss their many options: custom colors, graphics, engraving, anodize and powdercoat finishes, seat materials, detail accents, and more.',
      file_name: 'bespoke/process/Consultation.jpg'
    },
    {
      id: 2,
      title: 'YOUR DESIGN',
      content: 'Following the initial design consultation, our designers provide visual renderings for customers to review, make notes or refine further. This collaborative process allows customers to achieve a design that is unique to them.',
      file_name: 'bespoke/process/Design.jpg'
    },
    {
      id: 3,
      title: 'YOUR BUILD',
      content: 'Once the creative process is complete, assembly begins. Our dedicated procurement and assembly teams work closely to turn your digital representation into reality. After assembly and testing, customers have the option to receive their new ARCH in our Los Angeles facility or have the motorcycle shipped to their desired location.',
      file_name: 'bespoke/process/Build.jpg'
    },
    {
      id: 4,
      title: 'YOUR FIT',
      content: 'Tailoring ergonomics allows us to create a riding experience specific to each owner. Each seat’s shape and materials are personally tailored to you. Handlebar, hand and foot controls are positioned to fine-tune the fit further. This completes the rider triangle providing a level of comfort and connection that inspires confidence each time you ride.',
      file_name: 'bespoke/process/Fit.jpg'
    },
  ]

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
      <ImgComponent file_name='bespoke/Bespoke_img.jpg' alt='Bespoke'/>
      </div>
    </div>
  );
};
