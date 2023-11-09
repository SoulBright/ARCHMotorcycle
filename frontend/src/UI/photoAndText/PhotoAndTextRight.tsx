import * as React from 'react';

import s from './PhotoAndTextRight.module.scss';

interface IPhotoAndTextRightProps {
    theme: 'dark' | 'light',
    file_name: string,
    alt: string,
    title: string,
    content: string,
};

export const PhotoAndTextRight: React.FC<IPhotoAndTextRightProps> = (props) => {
    const wrapperClassName = `${s.wrapper} ${props.theme === 'dark' ? s.darkTheme : s.lightTheme}`;

    return (
        <div className={`${wrapperClassName}`}>
            <div className={s.wrapper}>
                <div className={s.img_container}>
                    <img src={process.env.PUBLIC_URL + `/images/${props.file_name}`} alt={props.alt} />
                </div>
                <div className={s.container}>
                    <h3>{props.title}</h3>
                    <span>{props.content}</span>
                </div>
            </div>
        </div>
    );
};
