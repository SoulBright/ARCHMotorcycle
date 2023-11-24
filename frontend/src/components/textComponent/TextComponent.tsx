import * as React from 'react';

import s from './TextComponent.module.scss';

interface ITextComponentProps {
    theme: 'dark' | 'light' | 'red',
    content: string,
}

export const TextComponent: React.FC<ITextComponentProps> = (props) => {
    const wrapperClassName = `${s.wrapper} ${props.theme === 'dark' ? s.darkTheme
        : props.theme === 'red' ? s.redTheme : s.lightTheme}`;

    return (
        <div className={`${wrapperClassName}`}>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <span>{props.content}</span>
                </div>
            </div>
        </div>
    );
};
