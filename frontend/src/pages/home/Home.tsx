import * as React from 'react';

import { VideoPreview } from './components/videoPreview/VideoPreview'
import { Preview } from './components/preview/Preview'
import { ModelRange } from './components/modelRange/ModelRange';

interface IHomeProps {
}

export const Home: React.FC<IHomeProps> = (props) => {
    return (
      <div>
        <VideoPreview />
        <Preview />
        <ModelRange />
      </div>
    );
};
