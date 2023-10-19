import * as React from 'react';
import { useState } from 'react';

import { ReactComponent as PlayButton } from './play-button_icon.svg';

import s from './VideoPreview.module.scss'

interface IVideoPreviewProps {
}

export const VideoPreview: React.FC<IVideoPreviewProps> = (props) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handlePlayButtonClick = () => {
        setIsVideoPlaying(true);
    };

    return (
        <div className={s.wrapper}>
            {isVideoPlaying ? (
                <div className={s.iframe_wrapper}>
                    <iframe
                        src="https://www.youtube.com/embed/2Qj1X1eJkqs?si=Mhf2tO21Q6sUtVR6&autoplay=1&rel=0&loop=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share, fs, rel">
                    </iframe>
                </div>
            ) : (
                <video autoPlay muted loop>
                    <source src={process.env.PUBLIC_URL + '/video/ARCH_Homepage_Video.mp4'} />
                </video>
            )}
            <div className={s.container}>
                <PlayButton className={s.play_button} onClick={handlePlayButtonClick} />
            </div>
        </div>
    );
};