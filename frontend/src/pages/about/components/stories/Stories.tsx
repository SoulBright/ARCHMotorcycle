import * as React from 'react';

import s from './Stories.module.scss';

interface IStoriesProps {
    theme: 'dark' | 'light',
    file_name: string,
    alt: string,
    title: string,
    content: string,
};

export const Stories: React.FC<IStoriesProps> = (props) => {
    const wrapperClassName = `${s.wrapper} ${props.theme === 'dark' ? s.darkTheme : s.lightTheme}`;

    return (
        <div className={`${wrapperClassName}`}>
            <div className={s.wrapper}>
                <div className={s.img_container}>
                    <img src={process.env.PUBLIC_URL + `/images/about/stories/${props.file_name}`} alt={props.alt} />
                </div>
                <div className={s.container}>
                    <h3>{props.title}</h3>
                    <span>{props.content}</span>
                </div>
            </div>
        </div>
    );
};
