import * as React from 'react';

import s from './ComponentSliderItems.module.scss';

interface IComponentSliderItemsProps {
    title: string;
    content: string;
    file_name: string;
};

export const ComponentSliderItems: React.FC<IComponentSliderItemsProps> = ({ title, content, file_name }) => {
    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <h3>{title}</h3>
                    <span>{content}</span>
                </div>
                <img src={process.env.PUBLIC_URL + `/images/${file_name}`} alt={title} />
            </div>
        </div>
    );
};

