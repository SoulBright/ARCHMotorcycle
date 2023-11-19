import * as React from 'react';
import { Transition } from 'react-transition-group';

import { ReactComponent as IconClose } from './cross_icon.svg';

import './ZoomModal.scss';

interface IZoomModalProps {
    isOpen: boolean,
    onClose: (value: React.SetStateAction<boolean>) => void,
    children: React.ReactNode,
};

export const ZoomModal: React.FC<IZoomModalProps> = ({ isOpen, onClose, children }) => {
    const nodeRef = React.useRef(null);
    return (
        <>
            <Transition in={isOpen} timeout={350} unmountOnExit={true} nodeRef={nodeRef}>
                {(state) => (
                    <div className={`modal modal--${state}`}>
                        <div className='modal_wrapper'>
                            <IconClose className='modal_close_button' onClick={() => onClose(false)} />
                            <div className='modal_content'>
                                {children}
                            </div>
                        </div>
                    </div>
                )}
            </Transition >
        </>
    );
};
