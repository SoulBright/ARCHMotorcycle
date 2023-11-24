import * as React from 'react';

import s from './PhotoAndTextLeft.module.scss';

interface IPhotoPhotoAndTextLeftProps {
    theme: 'dark' | 'light',
    title: string,
    content: string,
    file_name: string,
    alt: string,
};

export const PhotoAndTextLeft: React.FC<IPhotoPhotoAndTextLeftProps> = ({ theme, title, content, file_name, alt }) => {
    const wrapperClassName = `${s.wrapper} ${theme === 'dark' ? s.darkTheme : s.lightTheme}`;
    return (
        <div className={`${wrapperClassName}`}>
            <div className={s.container}>
                <div className={s.img_container}>
                    <img src={process.env.PUBLIC_URL + `/images/${file_name}`} alt={alt} />
                </div>
                <div className={s.content}>
                    <h3>{title}</h3>
                    <span>
                        {content}
                    </span>
                </div>
            </div>
        </div>
    );
};
