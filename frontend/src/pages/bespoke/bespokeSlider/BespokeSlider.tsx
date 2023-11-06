import * as React from 'react';

import s from './BespokeSlider.module.scss';

import { TypeBespokeSliderItems } from '../../../types';
import { BespokeSliderItems } from './bespokeSliderItems/BespokeSliderItems';

interface IBespokeSliderProps {
    title: string;
    content: string;
    ItemsList: TypeBespokeSliderItems[];
}

export const BespokeSlider: React.FC<IBespokeSliderProps> = ({ title, content, ItemsList }) => {
    const [additPrevSlideIndex, setAdditPrevSlideIndex] = React.useState(ItemsList.length - 2);
    const [prevSlideIndex, setPrevSlideIndex] = React.useState(ItemsList.length - 1);
    const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
    const [nextSlideIndex, setNextSlideIndex] = React.useState(1);
    const [nextadditSlideIndex, setAdditNextSlideIndex] = React.useState(2);
    const [slideDirection, setSlideDirection] = React.useState('');

    const handleSlideChange = (direction: string) => {
        if (direction === 'prev') {
            setSlideDirection('prev');
            setAdditPrevSlideIndex((prevIndex) => prevIndex === 0 ? ItemsList.length - 1 : prevIndex - 1);
            setPrevSlideIndex((prevIndex) => prevIndex === 0 ? ItemsList.length - 1 : prevIndex - 1);
            setActiveSlideIndex((prevIndex) => prevIndex === 0 ? ItemsList.length - 1 : prevIndex - 1);
            setNextSlideIndex((prevIndex) => prevIndex === 0 ? ItemsList.length - 1 : prevIndex - 1);
            setAdditNextSlideIndex((prevIndex) => prevIndex === 0 ? ItemsList.length - 1 : prevIndex - 1);
            setSlideDirection('');
        } else if (direction === 'next') {
            setSlideDirection('next');
            setAdditPrevSlideIndex((prevIndex) => (prevIndex + 1) % ItemsList.length);
            setPrevSlideIndex((prevIndex) => (prevIndex + 1) % ItemsList.length);
            setActiveSlideIndex((prevIndex) => (prevIndex + 1) % ItemsList.length);
            setNextSlideIndex((prevIndex) => (prevIndex + 1) % ItemsList.length);
            setAdditNextSlideIndex((prevIndex) => (prevIndex + 1) % ItemsList.length);
            setSlideDirection('');
        }
    };

    const handleSlideSelect = (index: number) => {
        setAdditPrevSlideIndex(index === 0 ? ItemsList.length - 2 : index - 2)
        setPrevSlideIndex(index === 0 ? ItemsList.length - 1 : index - 1)
        setActiveSlideIndex(index)
        setNextSlideIndex((index + 1) % ItemsList.length)
        setAdditNextSlideIndex((index + 2) % ItemsList.length)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
            <div className={s.bs_slider}>
                <div className={`${s.slide} ${slideDirection === 'prev' ? s.slide_prev : ''} ${slideDirection === 'next' ? s.slide_next : ''}`}>
                    <div className={s.container}>
                        <BespokeSliderItems
                            sl_lengs={ItemsList.length}
                            sl_number={ItemsList[additPrevSlideIndex].sl_number}
                            file_name={ItemsList[additPrevSlideIndex].file_name}
                            alt={ItemsList[additPrevSlideIndex].alt}
                        />
                        <BespokeSliderItems
                            sl_lengs={ItemsList.length}
                            sl_number={ItemsList[prevSlideIndex].sl_number}
                            file_name={ItemsList[prevSlideIndex].file_name}
                            alt={ItemsList[prevSlideIndex].alt}
                        />
                        <BespokeSliderItems
                            sl_lengs={ItemsList.length}
                            sl_number={ItemsList[activeSlideIndex].sl_number}
                            file_name={ItemsList[activeSlideIndex].file_name}
                            alt={ItemsList[activeSlideIndex].alt}
                        />
                        <BespokeSliderItems
                            sl_lengs={ItemsList.length}
                            sl_number={ItemsList[nextSlideIndex].sl_number}
                            file_name={ItemsList[nextSlideIndex].file_name}
                            alt={ItemsList[nextSlideIndex].alt}
                        />
                        <BespokeSliderItems
                            sl_lengs={ItemsList.length}
                            sl_number={ItemsList[nextadditSlideIndex].sl_number}
                            file_name={ItemsList[nextadditSlideIndex].file_name}
                            alt={ItemsList[nextadditSlideIndex].alt}
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
