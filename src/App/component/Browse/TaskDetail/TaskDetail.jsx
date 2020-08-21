import React from 'react';
import classNames from 'classnames/bind';

import styles from './TaskDetail.module.scss';

import {Header} from './Header';
import {Content} from './Content';

function TaskDetail({children}) {
  const {
    details,
    ...info 
  } = children;
  const cx = classNames.bind(styles);
  return(
    <div className = {cx('task-detail')}>
      <Header info = {info}/> 
      <Content details = {details}/>
    </div>
  );
}

export default TaskDetail;

