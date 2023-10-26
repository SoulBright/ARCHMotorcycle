import * as React from 'react';

import { TypePhilosophyItems } from '../../../../types';
import { PhilosophyItems } from './philosophyItems/PhilosophyItems';

import s from './Philosophy.module.scss';

interface IPhilosophyProps { };

export const Philosophy: React.FC<IPhilosophyProps> = (props) => {
  const PhilosophyItemsList: TypePhilosophyItems[] = [
    {
      id: 1,
      title: 'SIMPLE, ELEGANT, EFFICIENT',
      content: 'The ARCH Motorcycle design and engineering philosophy encapsulated in three words. Our quest is simple: provide complete solutions that maximize the performance potential of the overall motorcycle.',
      file_name: 'Elegant.jpg'
    },
    {
      id: 2,
      title: 'PROTOTYPING',
      content: 'Prototyping allows the validation of a concept prior to manufacturing. First article components are created to ensure fitment. We utilize the most up-to-date technologies such as 3-D printing and CNC machining to evaluate the overall integrity of each part. When further refinements are necessary we may also employ Finite Engineering Analysis (FEA), Virtual Reality (VR) and more until the component is ready for production.',
      file_name: 'Prototyping.jpg'
    },
    {
      id: 3,
      title: 'MANUFACTURING',
      content: 'At ARCH, we strive to achieve manufactured art. CNC-milling tool paths are artfully programmed to showcase a meticulous attention to detail in every machined component. From the billet aluminum swingarm and split fuel cells to the engine covers and beyond, each element has been designed, engineered and manufactured in-house with purpose at our Los Angeles facility.',
      file_name: 'Manufacturing.jpg'
    },
    {
      id: 4,
      title: 'INNOVATION',
      content: 'Every single component has to make sense for the motorcycle. This simple philosophy allows us to create innovative products that work, functionally and aesthetically. Enhancing the overall riding experience through careful testing and analysis allows us to validate these innovations.',
      file_name: 'Innovation.jpg'
    },
  ]

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
        setActiveSlideIndex((prevIndex) => prevIndex === 0 ? PhilosophyItemsList.length - 1 : prevIndex - 1);
        setSlideDirection('');
      }, 500); // Измените значение на то, которое соответствует продолжительности анимации в миллисекундах
    } else if (direction === 'next') {
      setSlideDirection('next');
      setTimeout(() => {
        setActiveSlideIndex((prevIndex) => (prevIndex + 1) % PhilosophyItemsList.length);
        setSlideDirection('');
      }, 500); // Измените значение на то, которое соответствует продолжительности анимации в миллисекундах
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
        <h3>MANUFACTURING PHILOSOPHY</h3>
      </div>
      {windowWidth > 767 ? (
        <div className={s.slider}>
          <button className={s.btn_prev} onClick={() => handleSlideChange('prev')}>&lt;</button>
          <div className={`${s.slide} ${slideDirection === 'prev' ? s.slide_prev : ''} ${slideDirection === 'next' ? s.slide_next : ''}`}>  
            <PhilosophyItems
              title={PhilosophyItemsList[activeSlideIndex].title}
              content={PhilosophyItemsList[activeSlideIndex].content}
              file_name={PhilosophyItemsList[activeSlideIndex].file_name}
            />
          </div>
          <button className={s.btn_next} onClick={() => handleSlideChange('next')}>&gt;</button>
        </div>
      ) : (
        PhilosophyItemsList.map((item) => (
          <div key={item.id} className={`${s.philosophy_items}_${item.id}`}>
            <PhilosophyItems title={item.title} content={item.content} file_name={item.file_name} />
          </div>
        ))
      )}
    </div>
  );
};
