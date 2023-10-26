import * as React from 'react';

import s from './PhilosophyItems.module.scss';

interface IPhilosophyItemsProps {
    title: string;
    content: string;
    file_name: string;
};

export const PhilosophyItems: React.FC<IPhilosophyItemsProps> = ({ title, content, file_name }) => {


    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <h3>{title}</h3>
                    <span>{content}</span>
                </div>
                <img src={process.env.PUBLIC_URL + `/images/about/philosophy/${file_name}`} alt={title} />
            </div>
        </div>
    );
};
