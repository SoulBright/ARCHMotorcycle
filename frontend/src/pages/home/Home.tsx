import * as React from 'react';

import { VideoPreview } from './components/videoPreview/VideoPreview'
import { Preview } from './components/preview/Preview'

import s from './Home.module.scss'

interface IHomeProps {
}

export const Home: React.FC<IHomeProps> = (props) => {
    return (
      <body>
        <VideoPreview />
        <Preview />
      </body>
    );
};
