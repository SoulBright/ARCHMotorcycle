import * as React from 'react';

import s from './ModelRangeItems.module.scss';
import { MyButton } from '../../../../../UI/button/MyButton';

interface IModelRangeItemsProps {
  file_name: string,
  alt: string,
  link: string,
};

export const ModelRangeItems: React.FC<IModelRangeItemsProps> = ({ file_name, alt, link }) => {
  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.img_container}>
          <img className={s.mr_img} src={process.env.PUBLIC_URL + `/images/home/model/${file_name}`} alt={alt}></img>
        </div>
        <MyButton theme='dark'>
          <a href={link}>DISCOVER MORE</a>
        </MyButton>
      </div>
    </div>
  );
};
