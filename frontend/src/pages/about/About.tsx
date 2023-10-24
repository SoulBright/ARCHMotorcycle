import * as React from 'react';

import { VideoComponent } from '../../UI/videoComponent/VideoComponent';
import { ScrollToTop } from '../../UI/scrollToTop/ScrollToTop';

import s from './About.module.scss';
import { Stories } from './components/stories/Stories';

interface IAboutProps { };

export const About: React.FC<IAboutProps> = (props) => {
    return (
        <div>
            <div className={s.wrapper}>
                <ScrollToTop />
                <VideoComponent
                    video='https://www.youtube.com/embed/g33LEbg63SU?si=Ndv6zzVmpT2wy1Wu'
                    background='about/ARCH_about_top.mp4'
                />
                <Stories
                    theme='light'
                    file_name='images/stories/about_stories_top.jpg'
                    alt='about arch'
                    title='about arch'
                    content='ARCH Motorcycle was founded in 2011 to challenge the perception of what an American motorcycle could be. 
                    Anything that compromises the ride, aesthetics, stance or function is treated as an opportunity to innovate and improve the design. 
                    ARCH owners seek more than just a machine. They are passionate individuals in search of a completely immersive riding experience. 
                    Every ARCH motorcycle is built from an obsession for innovative design, engineering excellence and dedication to the rider.'
                />


                <Stories
                    theme='dark'
                    file_name='images/stories/about_stories_bottom.jpg'
                    alt='ENGINEERING ART'
                    title='ENGINEERING ART'
                    content='Engineering is the bridge connecting our design and manufacturing philosophies. 
                    We take a purposeful but artistic approach to solve engineering challenges and prevent compromising the integrity of our components. 
                    We prefer never taking the easy way out and look to find solutions that allow the manufacturing process to respect the design. 
                    We use computerized strength analysis and the most advanced 3-D modeling software to take the part from concept to reality.'
                />
                <VideoComponent
                    video='https://www.youtube.com/embed/DfnP3vWFT6E?si=LQq88fy7tRAalN3w'
                    background='about/ARCH_about_bottom.mp4'
                />
            </div>
        </div>
    );
};
