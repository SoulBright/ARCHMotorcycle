import * as React from 'react';

import { VideoPreview } from './components/videoPreview/VideoPreview'

import s from './Home.module.scss'

interface IHomeProps {
}

export const Home: React.FC<IHomeProps> = (props) => {
    return (
      <body>
        <VideoPreview />
      </body>
    );
};
