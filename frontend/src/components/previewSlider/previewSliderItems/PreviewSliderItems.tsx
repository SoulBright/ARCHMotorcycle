import * as React from 'react';

import s from './PreviewSliderItems.module.scss';

interface IPreviewSliderItemsProps {
    file_name: string,
    alt: string,
}

export const PreviewSliderItems: React.FC<IPreviewSliderItemsProps> = ({ file_name, alt }) => {
    return (
        <div className={s.wrapper}>
            <img src={process.env.PUBLIC_URL + `/images/${file_name}`} alt={alt} />
        </div>
    );
};
