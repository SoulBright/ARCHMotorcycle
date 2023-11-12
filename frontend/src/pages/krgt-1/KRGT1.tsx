import * as React from 'react';

import s from './KRGT1.module.scss';
import { PreviewSliderList } from './variables/PreviewSliderList';
import { FeatureHighlightsList } from './variables/FeatureHighlightsList';

import { VideoComponent } from '../../UI/videoComponent/VideoComponent';
import { ModelDetailComponent } from '../../UI/modelDetailComponent/ModelDetailComponent';
import { PreviewSlider } from '../../UI/previewSlider/PreviewSlider';
import { ScrollToTop } from '../../UI/scrollToTop/ScrollToTop';
import { ComponentSlider } from '../../UI/componentSlider/ComponentSlider';

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
                ItemsList={FeatureHighlightsList }
            />
        </div>
    );
};
