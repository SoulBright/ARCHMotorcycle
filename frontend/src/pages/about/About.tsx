import * as React from 'react';

import s from './About.module.scss';

import { VideoComponent } from '../../components/videoComponent/VideoComponent';
import { ScrollToTop } from '../../components/scrollToTop/ScrollToTop';
import { PhotoAndTextRight } from '../../components/photoAndText/PhotoAndTextRight';
import { Production } from './components/production/Production';
import { Design } from './components/design/Design';
import { ComponentSlider } from '../../components/componentSlider/ComponentSlider'
// import { TextComponent } from '../../components/textComponent/TextComponent';

import { PhilosophyItemsList } from './vareables/variables/PhilosophyItemsList';

interface IAboutProps { };

export const About: React.FC<IAboutProps> = (props) => {
    return (
        <div>
            <div className={s.wrapper}>
                <ScrollToTop />
                {/* <TextComponent
                    theme='red'
                    content='DISCLAIMER! The menu items, buttons, and links for "APPAREL" and "CONTACT" 
                redirect to the official website of ARCH Motorcycle company!!!'
                /> */}
                <VideoComponent
                    video='https://www.youtube.com/embed/g33LEbg63SU?si=Ndv6zzVmpT2wy1Wu'
                    background='about/ARCH_about_top.mp4'
                />
                <PhotoAndTextRight
                    theme='dark'
                    file_name='about/stories/about_stories_top.jpg'
                    alt='about arch'
                    title='about arch'
                    content='ARCH Motorcycle was founded in 2011 to challenge the perception of what an American motorcycle could be. 
                    Anything that compromises the ride, aesthetics, stance or function is treated as an opportunity to innovate and improve the design. 
                    ARCH owners seek more than just a machine. They are passionate individuals in search of a completely immersive riding experience. 
                    Every ARCH motorcycle is built from an obsession for innovative design, engineering excellence and dedication to the rider.'
                />
                <Production />
                <Design />
                <PhotoAndTextRight
                    theme='light'
                    file_name='about/stories/about_stories_bottom.jpg'
                    alt='ENGINEERING ART'
                    title='ENGINEERING ART'
                    content='Engineering is the bridge connecting our design and manufacturing philosophies. 
                    We take a purposeful but artistic approach to solve engineering challenges and prevent compromising the integrity of our components. 
                    We prefer never taking the easy way out and look to find solutions that allow the manufacturing process to respect the design. 
                    We use computerized strength analysis and the most advanced 3-D modeling software to take the part from concept to reality.'
                />
                <ComponentSlider
                    main_title='MANUFACTURING PHILOSOPHY'
                    ItemsList={PhilosophyItemsList}
                />
                <VideoComponent
                    video='https://www.youtube.com/embed/DfnP3vWFT6E?si=LQq88fy7tRAalN3w'
                    background='about/ARCH_about_bottom.mp4'
                />
            </div>
        </div>
    );
};
