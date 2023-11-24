import * as React from 'react';

import s from './ImgComponent.module.scss';

interface IImgComponentProps {
    file_name: string,
    alt: string,
}

export const ImgComponent: React.FC<IImgComponentProps> = (props) => {
    return (
      <div className={s.img_container}>
        <img src={process.env.PUBLIC_URL + `/images/${props.file_name}`} alt={props.alt} />
      </div>
    );
};
