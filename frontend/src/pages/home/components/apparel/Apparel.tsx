import * as React from 'react';

import { MyButton } from '../../../../UI/button/MyButton';

import s from './Apparel.module.scss'

interface IApparelProps { }

export const Apparel: React.FC<IApparelProps> = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.img_container}>
                    <img src={process.env.PUBLIC_URL + '/images/Apparel.jpg'} alt="Californian-dreaming" />
                </div>
                <div className={s.content}>
                    <h3>Apparel</h3>
                    <span>
                        Check out the complete line of genuine ARCH Motorcycle apparel.
                    </span>
                    <div className={s.btn_w}>
                        <MyButton theme='dark' />
                    </div>
                </div>
            </div>
        </div>
    );
};
