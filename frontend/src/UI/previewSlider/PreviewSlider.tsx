import * as React from 'react';

import s from './PreviewSlider.module.scss';

import { TypePreviewSliderItems } from '../../types';
import { PreviewSliderItems } from './previewSliderItems/PreviewSliderItems';

interface IPreviewSliderProps {
    ItemsList: TypePreviewSliderItems[];
}

export const PreviewSlider: React.FC<IPreviewSliderProps> = ({ItemsList}) => {
    const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
    const [slideDirection, setSlideDirection] = React.useState('');

    const handleSlideChange = (direction: string) => {
        if (direction === 'prev') {
            setSlideDirection('prev');
            setActiveSlideIndex((prevIndex) => prevIndex === 0 ? ItemsList.length - 1 : prevIndex - 1);
            setSlideDirection('');
        } else if (direction === 'next') {
            setSlideDirection('next');
            setActiveSlideIndex((prevIndex) => (prevIndex + 1) % ItemsList.length);
            setSlideDirection('');
        }
    };

    return (
        <div className={s.wrapper}>
            <div className={s.pr_slider}>
                <div className={`${s.slide} ${slideDirection === 'prev' ? s.slide_prev : ''} ${slideDirection === 'next' ? s.slide_next : ''}`}>
                    {/* <div className={s.container}> */}
                        <PreviewSliderItems
                            file_name={ItemsList[activeSlideIndex].file_name}
                            alt={ItemsList[activeSlideIndex].alt}
                        />
                    {/* </div> */}
                </div>
                <button className={s.prev} onClick={() => handleSlideChange('prev')}>&#10094;</button>
                <button className={s.next} onClick={() => handleSlideChange('next')}>&#10095;</button>
            </div>
        </div>
    );
};
