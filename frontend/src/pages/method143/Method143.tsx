import * as React from 'react';

import s from './Method143.module.scss';

import { ScrollToTop } from '../../components/scrollToTop/ScrollToTop';
import { VideoComponent } from '../../components/videoComponent/VideoComponent';
import { Method143DetailComponent } from './method143DetailComponent/Method143DetailComponent';
import { PreviewSlider } from '../../components/previewSlider/PreviewSlider';
import { PreviewSliderList } from './variables/PreviewSliderList';
import { TextComponent } from '../../components/textComponent/TextComponent';
import { AboutModel } from '../../components/aboutModel/AboutModel';
import { Features } from '../../components/featuresComponent/Features';
import { FeaturesImgList } from './variables/FeaturesImgList';
import { Specifications } from '../../components/specifications/Specifications';
import { specificationList } from './variables/SpecificationList';

interface IMethod143Props {
}

export const Method143: React.FC<IMethod143Props> = (props) => {
    return (
        <div className={s.wrapper}>
            <ScrollToTop />
            <TextComponent
                theme='red'
                content='DISCLAIMER! The menu items, buttons, and links for "APPAREL" and "CONTACT" 
            redirect to the official website of ARCH Motorcycle company!!!'
            />
            <VideoComponent
                video='https://www.youtube.com/embed/XonQsKijRV4?si=fXllWF3-WzMFgfib'
                background='method143/Method_143.mp4'
            />
            <Method143DetailComponent
                theme='light'
                logo='method143/method_logo.png'
                logo_alt='Method143 Logo'
                title='ADVANCED DESIGN'
                content='The ARCH Method 143 is the ultimate production motorcycle. 
            Created to realize an ambition of what could be achieved in motorcycle design, 
            and to offer the opportunity for ownership of a motorcycle normally unavailable to the public, 
            a concept… A concept led by the design idea of layers and materials including carbon fiber, aluminum and fine leather. '
                file_name='method143/method143.jpg'
                alt='Method 143 preview'
            />
            <PreviewSlider
                ItemsList={PreviewSliderList}
            />
            <TextComponent
                theme='dark'
                content='“The Method 143 concept was created to push the limits of what could be achieved in motorcycle design.”'
            />
            <AboutModel
                theme='dark'
                title='LIMITED PRODUCTION'
                p1='Limited to 23 units worldwide, each Method 143 will be assembled by our dedicated staff in our Los Angeles, 
            California facility.'
                file_name='method143/about_method143.jpg'
                alt='Method 143'
            />
            <Features
                theme='dark'
                title='TAILORED TO YOU'
                content='Each of the 23 Method 143 units will be a bespoke ergonomic and aesthetic expression of its owner. 
                The result reflects your direct input and our design, 
                procurement and assembly teams work to create a timeless motorcycle tailored to you. 
                Each Method 143 motorcycle will be curated and meticulously assembled in our California facility.'
                itemList={FeaturesImgList}
            />
            <Specifications
                theme='dark'
                file_name='method143/Specification.jpg'
                alt='Method 143-engine'
                title='KEY SPECIFICATIONS'
                itemList={specificationList}
            />
        </div>
    );
};
