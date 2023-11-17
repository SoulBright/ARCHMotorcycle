import * as React from 'react';

import s from './Specifications.module.scss';

import { TypeSpecificationItems } from '../../types';

import { SpecificationItems } from './specificationItems/SpecificationItems';

interface ISpecificationsProps {
    theme: 'dark' | 'light'
    file_name: string,
    alt: string,
    title: string,
    itemList: TypeSpecificationItems[]
}

export const Specifications: React.FC<ISpecificationsProps> = ({ theme, file_name, alt, title, itemList }) => {
    const wrapperClassName = `${s.wrapper} ${theme === 'dark' ? s.darkTheme : s.lightTheme}`;

    return (
        <div className={`${wrapperClassName}`}>
            <div className={s.img_container}>
                <img src={process.env.PUBLIC_URL + `/images/${file_name}`} alt={alt} />
            </div>
            <div className={s.content}>
                <h3>{title}</h3>
                <div className={s.items}>
                    {itemList.map((item) => (
                        <div key={item.value}>
                            <SpecificationItems
                                theme={theme}
                                value={item.value}
                                descriptyon={item.descriptyon}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};
