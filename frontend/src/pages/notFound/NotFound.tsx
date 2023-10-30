import * as React from 'react';

import s from './NotFound.module.scss';
import { MyButton } from '../../UI/button/MyButton';

interface INotFoundProps {
}

export const NotFound: React.FC<INotFoundProps> = (props) => {
    return (
        <div>
            <div className={s.container}>
                <img src={process.env.PUBLIC_URL + '/images/img_404.jpg'} alt="img-404" />
                <div className={s.content}>
                    <h1>404</h1>
                    <h2>Did you end up in the middle of nowhere?</h2>
                    <p>
                        You have arrived at this page because the page you are looking for has either been removed or doesn’t exist.
                        Let us give you a ride home by clicking below.
                    </p>
                    <MyButton theme='dark'>
                        <a href="http://localhost:3000/">BACK TO HOME</a>
                    </MyButton>
                </div>
            </div>
        </div>
    );
};
