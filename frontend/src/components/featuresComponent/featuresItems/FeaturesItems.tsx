import * as React from 'react';

import s from './FeaturesItems.module.scss';

import { ReactComponent as ZoomButton } from './plus_icon.svg';
import { ZoomModal } from '../zoomModal/ZoomModal';

interface IFeaturesItemsProps {
  file_name: string,
  alt: string,
}

export const FeaturesItems: React.FC<IFeaturesItemsProps> = ({ file_name, alt }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false)

  const handleZoomButtonClick = () => {
    setModalIsOpen(true)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <img src={process.env.PUBLIC_URL + `/images/${file_name}`} alt={alt} />
      </div>
      <div className={s.container} onClick={handleZoomButtonClick}>
        <ZoomButton className={s.zoom_btn} />
      </div>

      <ZoomModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      >
        <div>
          <img src={process.env.PUBLIC_URL + `/images/${file_name}`} alt={alt} />
        </div>
      </ZoomModal>
    </div>
  );
};
