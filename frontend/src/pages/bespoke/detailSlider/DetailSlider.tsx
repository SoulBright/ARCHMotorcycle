import * as React from 'react';

import s from './DetailSlider.module.scss';

import { TypeDetailSliderItems } from '../../../types';
import { BespokeSliderItems } from '../bespokeSlider/bespokeSliderItems/BespokeSliderItems';

interface IDetailSliderProps {
    ItemsList: TypeDetailSliderItems[];
}

export const DetailSlider: React.FC<IDetailSliderProps> = ({ ItemsList }) => {
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

    const handleSlideSelect = (index: number) => {
        setActiveSlideIndex(index)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.bs_slider}>
                <div className={`${s.slide} ${slideDirection === 'prev' ? s.slide_prev : ''} ${slideDirection === 'next' ? s.slide_next : ''}`}>
                    <div className={s.container}>
                        <BespokeSliderItems
                            sl_lengs={ItemsList.length}
                            sl_number={ItemsList[activeSlideIndex].sl_number}
                            file_name={ItemsList[activeSlideIndex].file_name}
                            alt={ItemsList[activeSlideIndex].alt}
                        />
                    </div>
                </div>
                <nav className={s.nav_dot}>
                    {ItemsList.map((item, index) => (
                        <span
                            key={item.sl_number}
                            className={`${s.dot} ${index === activeSlideIndex ? s.active_dot : ''}`}
                            onClick={() => handleSlideSelect(index)}
                        ></span>
                    ))}
                </nav>
                <button className={s.prev} onClick={() => handleSlideChange('prev')}>&#10094;</button>
                <button className={s.next} onClick={() => handleSlideChange('next')}>&#10095;</button>
            </div>
        </div>
    );
};
