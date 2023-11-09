import * as React from 'react';

import s from './Social.module.scss';

import { TypeSocialImgItems } from '../../../types';
import { SocialImgItems } from './socialItems/SocialItems';

interface ISocialProps {
  title: string,
  content: string,
  itemList: TypeSocialImgItems[],
}

export const Social: React.FC<ISocialProps> = ({ title, content, itemList }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div className={s.container}>
        {itemList.map((item) => (
          <SocialImgItems
            file_name={item.file_name}
            alt={item.alt}
          />
        ))}
      </div>
    </div>
  );
};
