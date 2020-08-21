import React from 'react';
import classNames from 'classnames/bind';

import styles from './TaskDetail.module.scss';

import {Header} from './Header';
import {Section} from './Section';

function TaskDetail({children}) {
  const {
    details,
    ...info 
  } = children;

  const sectionNameList = ['DETAILS', 'OFFER'];
  const cx = classNames.bind(styles);
  return(
    <div className = {cx('task-detail')}>
      <Header info = {info}/> 
      <Section title = 'DETAILS'>
        {details}
      </Section>
      <Section title = 'OFFER'>
      </Section>
    </div>
  );
}

export default TaskDetail;

