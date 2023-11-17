import * as React from 'react';

import s from './SpecificationItems.module.scss';

interface ISpecificationItemsProps {
    theme: 'dark' | 'light'
    value: string,
    descriptyon: string
}

export const SpecificationItems: React.FC<ISpecificationItemsProps> = ({ value, descriptyon, theme }) => {
    const wrapperClassName = `${s.wrapper} ${theme === 'dark' ? s.darkTheme : s.lightTheme}`;

    return (
        <div className={`${wrapperClassName}`}>
            <div className={s.value}>
                {value}
            </div>
            <div className={s.descriptyon}>
                <span>{descriptyon}</span>
            </div>
        </div>
    );
};
