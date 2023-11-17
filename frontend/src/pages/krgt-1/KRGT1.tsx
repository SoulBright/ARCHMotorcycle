import * as React from 'react';

import s from './KRGT1.module.scss';
import { PreviewSliderList } from './variables/PreviewSliderList';
import { FeatureHighlightsList } from './variables/FeatureHighlightsList';
import { FeaturesImgList } from './variables/FeaturesImgList';
import { specificationList } from './variables/SpecificationList';

import { VideoComponent } from '../../UI/videoComponent/VideoComponent';
import { ModelDetailComponent } from '../../UI/modelDetailComponent/ModelDetailComponent';
import { PreviewSlider } from '../../UI/previewSlider/PreviewSlider';
import { ScrollToTop } from '../../UI/scrollToTop/ScrollToTop';
import { ComponentSlider } from '../../UI/componentSlider/ComponentSlider';
import { TextComponent } from '../../UI/textComponent/TextComponent';
import { AboutModel } from '../../UI/aboutModel/AboutModel';
import { Features } from '../../UI/featuresComponent/Features';
import { Specifications } from '../../UI/specifications/Specifications';

interface IKRGT1Props {
}

export const KRGT1: React.FC<IKRGT1Props> = (props) => {
    return (
        <div className={s.wrapper}>
            <ScrollToTop />
            <VideoComponent
                video='https://www.youtube.com/embed/kY5mDowyo34?si=pR5xh7rnLD32dyUn'
                background='krgt-1/ARCH_KRGT1.mp4'
            />
            <ModelDetailComponent
                theme='dark'
                logo='krgt-1/KRGT-1-Logo.png'
                logo_alt='KRGT-1 Logo'
                title='PRESENCE IN MOTION'
                content='The ARCH KRGT-1 set out to achieve a new benchmark in the performance cruiser category. 
            Powered by an ARCH / S&S 124ci V-Twin with a distinctively aggressive profile, 
            the KRGT-1 is equally at home cruising highways or carving canyon roads.'
                file_name='krgt-1/krgt1.jpg'
                alt='krgt-1 preview'
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
                content='“Race-inspired handling and ride quality are paramount, that’s why we work directly with Öhlins.”'
            />
            <AboutModel
                title='PERFORMANCE CRUISER'
                p1='ARCH Motorcycle was created to redefine what an American motorcycle could be. 
            We saw an opportunity to evolve how a cruiser performed while retaining the visceral characteristics of a V-twin engine. 
            The ARCH KRGT-1 is an American Performance Cruiser that blends long-distance range and comfort with agile handling 
            and impressive torque, designed with the rider in mind. '
                p2='The ARCH Performance Architecture features a steel tube main frame with billet aluminum subframe to provide 
                a rigid chassis structure for dynamic handling. 
                Drivetrain isolation dampeners have been incorporated to help reduce vibration. 
                Components are manufactured in-house starting with 1,200 pounds of billet aluminum. 
                The end result yields approximately 120 pounds of unique components, from chassis side plates, fuel cells, 
                and swingarm to engine covers and more. When outside products are needed, 
                we partner with top manufacturers to create functional components that enhance the riding experience.'
                file_name='krgt-1/about_krgt1.jpg'
                alt='About KRGT-1 PERFORMANCE CRUISER'
            />
            <Features
                title='TAILORED TO YOU'
                content='Each KRGT-1 features a bespoke aesthetic and ergonomic package tailoring the fit and finish of the motorcycle to its owner. 
                Tailoring begins with the creation of your aesthetic package followed by an ergonomic fitting. 
                A uniquely shaped seat and ideal placement of foot and hand controls result in an organic connection with the motorcycle. 
                Assembled at ARCH Motorcycle’s Los Angeles facility, each ARCH KRGT-1 is built to order.'
                itemList={FeaturesImgList}
            />
            <Specifications
                theme='light'
                file_name='krgt-1/Specification.jpg'
                alt='KRGT-1-engine'
                title='KEY SPECIFICATIONS'
                itemList={specificationList}
            />
        </div>
    );
};
