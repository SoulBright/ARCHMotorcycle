import * as React from 'react';
import { Transition } from 'react-transition-group';

import { ReactComponent as IconClose } from './cross_icon.svg';

import './MenuModal.scss'

interface IMenuModalProps {
    isOpen: boolean,
    onClose: (value: React.SetStateAction<boolean>) => void,
    children: React.ReactNode,
}

export const MenuModal: React.FC<IMenuModalProps> = ({ isOpen, onClose, children }) => {
    return (
        <>
            <Transition in={isOpen} timeout={350} unmountOnExit={true}>
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
