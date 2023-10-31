import * as React from 'react';

import s from './About.module.scss';
import { TypeComponentSliderItems } from '../../types';

import { VideoComponent } from '../../UI/videoComponent/VideoComponent';
import { ScrollToTop } from '../../UI/scrollToTop/ScrollToTop';
import { Stories } from './components/stories/Stories';
import { Production } from './components/production/Production';
import { Design } from './components/design/Design';
import { ComponentSlider } from '../../UI/componentSlider/ComponentSlider'

interface IAboutProps { };

export const About: React.FC<IAboutProps> = (props) => {
    const PhilosophyItemsList: TypeComponentSliderItems[] = [
        {
            id: 1,
            title: 'SIMPLE, ELEGANT, EFFICIENT',
            content: 'The ARCH Motorcycle design and engineering philosophy encapsulated in three words. Our quest is simple: provide complete solutions that maximize the performance potential of the overall motorcycle.',
            file_name: 'about/philosophy/Elegant.jpg'
        },
        {
            id: 2,
            title: 'PROTOTYPING',
            content: 'Prototyping allows the validation of a concept prior to manufacturing. First article components are created to ensure fitment. We utilize the most up-to-date technologies such as 3-D printing and CNC machining to evaluate the overall integrity of each part. When further refinements are necessary we may also employ Finite Engineering Analysis (FEA), Virtual Reality (VR) and more until the component is ready for production.',
            file_name: 'about/philosophy/Prototyping.jpg'
        },
        {
            id: 3,
            title: 'MANUFACTURING',
            content: 'At ARCH, we strive to achieve manufactured art. CNC-milling tool paths are artfully programmed to showcase a meticulous attention to detail in every machined component. From the billet aluminum swingarm and split fuel cells to the engine covers and beyond, each element has been designed, engineered and manufactured in-house with purpose at our Los Angeles facility.',
            file_name: 'about/philosophy/Manufacturing.jpg'
        },
        {
            id: 4,
            title: 'INNOVATION',
            content: 'Every single component has to make sense for the motorcycle. This simple philosophy allows us to create innovative products that work, functionally and aesthetically. Enhancing the overall riding experience through careful testing and analysis allows us to validate these innovations.',
            file_name: 'about/philosophy/Innovation.jpg'
        },
    ]
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
                    file_name='about_stories_top.jpg'
                    alt='about arch'
                    title='about arch'
                    content='ARCH Motorcycle was founded in 2011 to challenge the perception of what an American motorcycle could be. 
                    Anything that compromises the ride, aesthetics, stance or function is treated as an opportunity to innovate and improve the design. 
                    ARCH owners seek more than just a machine. They are passionate individuals in search of a completely immersive riding experience. 
                    Every ARCH motorcycle is built from an obsession for innovative design, engineering excellence and dedication to the rider.'
                />
                <Production />
                <Design />
                <Stories
                    theme='dark'
                    file_name='about_stories_bottom.jpg'
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
