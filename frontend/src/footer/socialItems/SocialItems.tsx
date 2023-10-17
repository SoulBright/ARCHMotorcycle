import * as React from 'react';
import { TypeSocialItems } from '../../types'

import { ReactComponent as FacebookIcon } from './icons/Facebook_icon.svg';
import { ReactComponent as InstagramIcon } from './icons/instagram_icon.svg';
import { ReactComponent as YoutubeIcon } from './icons/YOUTUBE_icon.svg';
import { ReactComponent as XIcon } from './icons/x_icon.svg'

import s from './SocaialItema.module.scss'

interface ISocialItemsProps {
}

export const SocialItems: React.FC<ISocialItemsProps> = (props) => {
    const SocialItems: TypeSocialItems[] = [
        {
            id: 1,
            title: 'Instagram',
            svg: <InstagramIcon />,
            url: 'https://www.instagram.com/archmotorcycle/?hl=en',
        },
        {
            id: 2,
            title: 'facebook',
            svg: <FacebookIcon />,
            url: 'https://www.facebook.com/archmotorcycle/',
        },
        {
            id: 3,
            title: 'youtobe',
            svg: <YoutubeIcon />,
            url: 'https://www.youtube.com/channel/UCkmbqgfpgnFxKhbgel8Nz4w',
        },
        {
            id: 4,
            title: 'twitter',
            svg: <XIcon />,
            url: 'https://twitter.com/archmotorcycle/',
        },
    ]
    return (
        <div>
            <div className={s.social}>
                {SocialItems.map((item) => (
                    <div key={item.id} className={s.social_items}>
                        <a href={item.url}>
                            <div className={`${s.icon_container} ${s.custom_icon_style}`}>
                                {item.svg}
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};
