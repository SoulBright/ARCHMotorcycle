import * as React from 'react';

import s from './Design.module.scss';

interface IDesignProps {
}

export const Design: React.FC<IDesignProps> = (props) => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 980);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 981);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const imgSrc = `${process.env.PUBLIC_URL}/images/about/${isMobile ? 'Design_mobile.jpg' : 'Design.jpg'}`;

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.content}>
                    <h3>ARCH Design</h3>
                    <span>
                        Our dedicated design team work closely with each owner in creating their personalized ARCH motorcycle.
                        They are also responsible for defining the future of ARCH Motorcycle. From the sketch phase to 3-D modeling,
                        the design team considers which materials to use and how to create the next generation of ARCH products.
                    </span>
                </div>
                <div className={s.img_container}>
                    <img src={imgSrc} alt="Design" />
                </div>
            </div>
        </div>
    );
};
