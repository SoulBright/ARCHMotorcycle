import * as React from 'react';

import s from './1s.module.scss';
import { ScrollToTop } from '../../components/scrollToTop/ScrollToTop';
import { VideoComponent } from '../../components/videoComponent/VideoComponent';
import { OneSDetailComponent } from './OneSDetailComponent/OneSDetailComponent';
import { PreviewSlider } from '../../components/previewSlider/PreviewSlider';
import { PreviewSliderList } from './variables/PreviewSliderList';
import { ComponentSlider } from '../../components/componentSlider/ComponentSlider';
import { FeatureHighlightsList } from './variables/FeatureHighlightsList';
import { TextComponent } from '../../components/textComponent/TextComponent';
import { AboutModel } from '../../components/aboutModel/AboutModel';
import { Features } from '../../components/featuresComponent/Features';
import { FeaturesImgList } from './variables/FeaturesImgList';
import { Specifications } from '../../components/specifications/Specifications';
import { specificationList } from './variables/SpecificationList';
import { Details } from '../../components/details/Details';
import { DetailsList } from './variables/DetailsList';

interface IOneSProps {
}

export const OneS: React.FC<IOneSProps> = (props) => {
    return (
        <div className={s.wrapper}>
            <ScrollToTop />
            <TextComponent
                theme='red'
                content='DISCLAIMER! The menu items, buttons, and links for "APPAREL" and "CONTACT" 
            redirect to the official website of ARCH Motorcycle company!!!'
            />
            <VideoComponent
                video='https://www.youtube.com/embed/Rv1hyVTLdpE?si=SwodOT8Jk1ApHFQy'
                background='1s/ARCH-1S.mp4'
            />
            <OneSDetailComponent
                theme='dark'
                logo='1s/1s_logo.png'
                logo_alt='1S Logo'
                title='RACE INSPIRED'
                content='The ARCH 1s draws influence from both cruiser and street sport riding to create 
            a motorcycle that defies industry categorization. 
            The 1s features the first production single-sided billet aluminum swingarm from ARCH. 
            Rear/mid-mounted foot controls provide a more aggressive riding position.'
                file_name='1s/img_1S.jpg'
                alt='1s preview'
            />
            <PreviewSlider
                ItemsList={PreviewSliderList}
            />
            <ComponentSlider
                main_title='FEATURE HIGHLIGHTS'
                ItemsList={FeatureHighlightsList}
            />
            <TextComponent
                theme='light'
                content='“Redefining the American Sport Cruiser.”'
            />
            <AboutModel
                theme='light'
                title='SPORT FORWARD'
                p1='The sport-influenced 1s provides a more aggressive riding position allowing for smoother transitions 
            and harder cornering. Utilizing proprietary CNC-machined aluminum components and extensive use of carbon fiber throughout,
             the result is a race-inspired machine that redefines the Sport Cruiser.'
                file_name='1s/about_1S.jpg'
                alt='About 1S SPORT FORWARD'
            />
            <Features
                theme='light'
                title='TAILORED TO YOU'
                content='The ARCH 1s features a bespoke aesthetic and ergonomic package tailoring the fit and finish of the motorcycle
                 to its owner. Tailoring begins with the creation of your aesthetic package followed by an ergonomic fitting.
                  Seat, foot and hand control adjustments result in an organic connection with the motorcycle.
                   Assembled at ARCH Motorcycle’s Los Angeles facility, each ARCH 1s is built to order.'
                itemList={FeaturesImgList}
            />
            <Specifications
                theme='light'
                file_name='1s/Specification.jpg'
                alt='1s-engine'
                title='KEY SPECIFICATIONS'
                itemList={specificationList}
            />
            <Details
                itemList={DetailsList}
                certification='CARB / EPA compliant; ABS standard equipment on 2021-later 1s models '
            />
        </div>
    );
};
