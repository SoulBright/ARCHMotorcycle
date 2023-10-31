import * as React from 'react';

import { TypeComponentSliderItems } from '../../types';
import { ComponentSliderItems } from './componentSliderItems/ComponentSliderItems';


import s from './ComponentSlider.module.scss';

interface IComponentSliderProps {
  main_title: string,
  ItemsList: TypeComponentSliderItems[];
};

export const ComponentSlider: React.FC<IComponentSliderProps> = ({ main_title, ItemsList }) => {
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [slideDirection, setSlideDirection] = React.useState('');

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleSlideChange = (direction: string) => {
    if (direction === 'prev') {
      setSlideDirection('prev');
      setTimeout(() => {
        setActiveSlideIndex((prevIndex) => prevIndex === 0 ? ItemsList.length - 1 : prevIndex - 1);
        setSlideDirection('');
      }, 500);
    } else if (direction === 'next') {
      setSlideDirection('next');
      setTimeout(() => {
        setActiveSlideIndex((prevIndex) => (prevIndex + 1) % ItemsList.length);
        setSlideDirection('');
      }, 500);
    }
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h3>{main_title}</h3>
      </div>
      {windowWidth > 767 ? (
        <div className={s.slider}>
          <button className={s.btn_prev} onClick={() => handleSlideChange('prev')}>&lt;</button>
          <div className={`${s.slide} ${slideDirection === 'prev' ? s.slide_prev : ''} ${slideDirection === 'next' ? s.slide_next : ''}`}>
            <ComponentSliderItems
              title={ItemsList[activeSlideIndex].title}
              content={ItemsList[activeSlideIndex].content}
              file_name={ItemsList[activeSlideIndex].file_name}
            />
          </div>
          <button className={s.btn_next} onClick={() => handleSlideChange('next')}>&gt;</button>
        </div>
      ) : (
        ItemsList.map((item) => (
          <div key={item.id} className={`${s.philosophy_items}_${item.id}`}>
            <ComponentSliderItems
              title={item.title}
              content={item.content}
              file_name={item.file_name}
            />
          </div>
        ))
      )}
    </div>
  );
};