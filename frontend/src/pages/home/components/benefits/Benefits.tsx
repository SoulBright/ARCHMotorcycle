import * as React from 'react';

import { MyButton } from '../../../../UI/button/MyButton';

import s from './Benefits.module.scss';

interface IBenefitsProps {
    theme: 'dark' | 'light',
    file_name_m: string,
    file_name_l: string,
    alt: string,
    title: string,
    content: string,
    link: string
};

export const Benefits: React.FC<IBenefitsProps> = (props) => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 980);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 980);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const wrapperClassName = `${s.wrapper} ${props.theme === 'dark' ? s.darkTheme : s.lightTheme}`;
    const imgSrc = `${process.env.PUBLIC_URL}/images/home/benefits/${isMobile ? props.file_name_m : props.file_name_l}`;

    return (
        <div className={`${wrapperClassName}`}>
            <div className={s.wrapper}>
                <div className={s.img_container}>
                    <img src={imgSrc} alt={props.alt} />
                </div>
                <div className={s.container}>
                    <h3>{props.title}</h3>
                    <span>{props.content}</span>
                    <div className={s.btn_w}>
                        <MyButton theme={props.theme}>
                            <a href={props.link}>DISCOVER MORE</a>
                        </MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};
