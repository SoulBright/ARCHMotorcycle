import * as React from 'react';

import s from './Features.module.scss';

import { TypeFeaturesItems } from '../../types';
import { FeaturesItems } from './featuresItems/FeaturesItems';

interface IFeaturesProps {
  title: string,
  content: string,
  itemList: TypeFeaturesItems[],
}

export const Features: React.FC<IFeaturesProps> = ({ title, content, itemList }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div className={s.container}>
        {itemList.map((item) => (
          <div key={item.file_name}>
            <FeaturesItems
              file_name={item.file_name}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}; 
