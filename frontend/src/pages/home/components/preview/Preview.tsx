import * as React from 'react';

import s from './Preview.module.scss';

interface IPreviewProps {};

export const Preview: React.FC<IPreviewProps> = (props) => {
    return (
        <div className={s.preview_wrapper}>
            <div className={s.preview_container}>
                <div className={s.title}>
                    <span>Inspired by the ride. Crafted with passion. Tailored to you.</span>
                </div>
                <img src={process.env.PUBLIC_URL + '/images/home/ARCH_Preview.jpg'} alt="ARCH" />
                <div className={s.preview_footer}>
                    <span>MOTORCYCLES</span>
                </div>
            </div>
        </div>
    );
};
