import * as React from 'react';

import s from './Benefits.module.scss'
import { MyButton } from '../../../../UI/button/MyButton';

interface IBenefitsProps {
    theme: 'dark' | 'light',
    file_name_m: string,
    file_name_l: string,
    alt: string,
    title: string,
    content: string,
}

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
    const imgSrc = `${process.env.PUBLIC_URL}/images/benefits/${isMobile ? props.file_name_m : props.file_name_l}`;

    return (
        <div className={`${wrapperClassName}`}>
            <div className={s.wrapper}>
                <img className={s.benefits_img} src={imgSrc} alt={props.alt} />
                <div className={s.container}>
                    <div className={s.content}>
                        <h3>{props.title}</h3>
                        <span>{props.content}</span>
                    </div>
                </div>
                <div className={s.btn_w}>
                    <MyButton theme={props.theme} />
                </div>
            </div>
        </div>
    );
};