import React from 'react';
import classNames from 'classnames/bind';

import styles from './StatusList.module.scss';

import {TaskConsumer} from '../../../Context';

function StatusList() {
  const statusNameList = ['OPEN', 'ASSIGN', 'COMPLETED'];
  
  const cx = classNames.bind(styles);
  const statusList = statusNameList.map((statusName) =>
    <TaskConsumer>
      {value =>
        <div 
          className = {cx((value.status.toUpperCase() === statusName)? 'status-active':'status')}
          key = {statusName}
        >
          {statusName}
        </div>
      }
    </TaskConsumer>
  );

  return (
    <div className = {cx('status-list')}>
      {statusList}
    </div>
  );

}

export default StatusList;