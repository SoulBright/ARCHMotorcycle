import * as React from 'react';
import { useEffect } from 'react'

import { ReactComponent as ToTopIco } from './to-top-icon.svg';

import s from './ScrollToTop.module.scss';

interface IScrollToTopProps {
}

export const ScrollToTop: React.FC<IScrollToTopProps> = (props) => {

    useEffect(() => {
        const handleScroll = () => {
            const toTopElement = document.querySelector(`.${s.to_top}`);
            if (toTopElement) {
                if (window.scrollY > 700) {
                    toTopElement.classList.add(s.show);
                } else {
                    toTopElement.classList.remove(s.show);
                };
            };
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <div className={s.to_top} onClick={scrollToTop} >
                <ToTopIco className={s.to_top_ico} />
            </div>
        </div>
    );
};
