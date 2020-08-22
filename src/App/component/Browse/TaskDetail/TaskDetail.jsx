import React from 'react';
import classNames from 'classnames/bind';

import styles from './TaskDetail.module.scss';

import {Header} from './Header';
import {Section} from './Section';
import {SideBar} from './SideBar';

function TaskDetail({children}) {
  const {
    budget,
    details,
    ...info 
  } = children;

  const cx = classNames.bind(styles);
  return(
    <div className = {cx('task-detail')}>
      <SideBar>
        {budget}
      </SideBar> 
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

