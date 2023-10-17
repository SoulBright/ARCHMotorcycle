import * as React from 'react';

import { ReactComponent as PlayButton } from './play-button_icon.svg';

import s from './VideoPreview.module.scss'

interface IVideoPreviewProps {
}

export const VideoPreview: React.FC<IVideoPreviewProps> = (props) => {
    return (
        <div className={s.wrapper}>
            <video autoPlay muted loop>
                <source src={process.env.PUBLIC_URL + '/video/ARCH_Homepage_Video.mp4'} />
            </video>
            <div className={s.container}>
                <PlayButton className={s.play_button}/>
            </div>
        </div>
    );
};
