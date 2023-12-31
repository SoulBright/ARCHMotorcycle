import * as React from 'react';

import s from './modelRange.module.scss';
import { ModelRangeItems } from './modelRangeItems/ModelRangeItems';

const API_URL = process.env.REACT_APP_API_URL;

interface IModelRangeProps {};

export const ModelRange: React.FC<IModelRangeProps> = (props) => {
  return (
    <div>
      <div className={s.model_wrapper}>
        <div className={s.model_container}>
          <ModelRangeItems link={`${API_URL}/arch-krgt-1/`} file_name='KRGT-1.jpg' alt='krgt-1' />
          <ModelRangeItems link={`${API_URL}/arch-1s/`} file_name='1S.jpg' alt='1s' />
          <ModelRangeItems link={`${API_URL}/arch-method143/`} file_name='method_143.jpg' alt='method 143' />
        </div>
      </div>
    </div>
  );
};
