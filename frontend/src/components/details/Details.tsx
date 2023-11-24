import * as React from 'react';

import s from './Details.module.scss';
import { TypeDetailItems } from '../../types';

interface IDetailsProps {
    itemList: TypeDetailItems[],
    certification: string,
}

export const Details: React.FC<IDetailsProps> = ({ itemList, certification }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.conteiner}>
                <h3>FULL SPECIFICATIONS</h3>
                <table>
                    <tbody>
                        {itemList.map((item) => (
                            <tr key={item.parameter}>
                                <td className={s.par}>{item.parameter}</td>
                                <td className={s.des}>{item.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <span>{certification}</span>
            </div>
        </div >
    );
};
