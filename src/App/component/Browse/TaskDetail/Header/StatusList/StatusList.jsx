import React from 'react';
import classNames from 'classnames/bind';
import {connect} from 'react-redux';

import styles from './StatusList.module.scss';

function StatusList({status}) {
  const statusNameList = ['OPEN', 'ASSIGN', 'COMPLETED'];
  
  const cx = classNames.bind(styles);
  const statusList = statusNameList.map((statusName) =>
    <div 
      className = {cx((status.toUpperCase() === statusName)? 'status-active':'status')}
      key = {statusName}
    >
      {statusName}
    </div>
  );

  return (
    <div className = {cx('status-list')}>
      {statusList}
    </div>
  );

}

function mapStateToProps(state) {
  const task = state.taskList[state.taskIndex];
  const {status} = task;
  return {
    status 
  };
}

export default connect(mapStateToProps)(StatusList);