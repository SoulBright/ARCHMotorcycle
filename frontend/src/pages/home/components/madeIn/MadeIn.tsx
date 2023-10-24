import * as React from 'react';

import s from './MadeIn.module.scss';

interface IMadeInProps {};

export const MadeIn: React.FC<IMadeInProps> = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.img_container}>
                    <img src={process.env.PUBLIC_URL + '/images/Californian-dreaming.jpg'} alt="Californian-dreaming" />
                </div>
                <div className={s.content}>
                    <h3>Made in California</h3>
                    <span>
                        ARCH Motorcycle planted roots in California long before the company was founded.
                        The temperate climate is ideal for year-round riding and its diverse topography welcomes a sense of adventure,
                        making it the perfect place for development.
                    </span>
                </div>
            </div>
        </div>
    );
};
