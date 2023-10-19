import * as React from 'react';

import s from './modelRange.module.scss'
import { ModelRangeItems } from './modelRangeItems/ModelRangeItems';

interface IModelRangeProps {
}

export const ModelRange: React.FC<IModelRangeProps> = (props) => {
  return (
    <div>
      <div className={s.model_wrapper}>
        <div className={s.model_container}>
          <ModelRangeItems file_name='KRGT-1.jpg' alt='krgt-1' />
          <ModelRangeItems file_name='1S.jpg' alt='1s' />
          <ModelRangeItems file_name='method_143.jpg' alt='method 143' />
        </div>
      </div>
    </div>
  );
};
