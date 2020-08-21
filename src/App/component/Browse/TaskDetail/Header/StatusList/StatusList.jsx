import React from 'react';
import classNames from 'classnames/bind';

import styles from './StatusList.module.scss';

function StatusList({status}) {
  const statusNameList = ['OPEN', 'ASSIGN', 'COMPLETED'];
  
  const cx = classNames.bind(styles);
  const statusList = statusNameList.map((statusName) =>
    <div className = {cx((status.toUpperCase() === statusName)? 'status-active':'status')}>
      {statusName}
    </div>
  );

  return (
    <div className = {cx('status-list')}>
      {statusList}
    </div>
  );

}

export default StatusList;