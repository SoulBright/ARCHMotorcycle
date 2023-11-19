import * as React from 'react';

import s from './ModelDetailComponent.module.scss';

interface IModelDetailComponentProps {
    theme: 'dark' | 'light',
    logo: string,
    logo_alt: string,
    title: string,
    content: string
    file_name: string
    alt: string,
}

export const ModelDetailComponent: React.FC<IModelDetailComponentProps> = ({ theme, logo, logo_alt, title, content, file_name, alt }) => {
    const wrapperClassName = `${s.wrapper} ${theme === 'dark' ? s.darkTheme : s.lightTheme}`;

    return (
        <div className={`${wrapperClassName}`}>
            <div className={s.content}>
                <img className={s.logo} src={process.env.PUBLIC_URL + `/images/${logo}`} alt={logo_alt} />
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
            <div className={s.preview}>
                <img src={process.env.PUBLIC_URL + `/images/${file_name}`} alt={alt} />
            </div>
        </div>
    );
};
