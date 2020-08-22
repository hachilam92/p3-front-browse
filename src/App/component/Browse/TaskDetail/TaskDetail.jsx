import React from 'react';
import classNames from 'classnames/bind';

import styles from './TaskDetail.module.scss';

import {Header} from './Header';
import {Section} from './Section';
import {SideBar} from './SideBar';
import {TaskConsumer} from '../Context';

function TaskDetail() {
  const cx = classNames.bind(styles);
  return(
    <div className = {cx('task-detail')}>
      <SideBar/>
      <Header/>
      <TaskConsumer>
        {value =>
          <Section title = 'DETAILS'>
            {value.details}
          </Section>
        }
      </TaskConsumer>
      <Section title = 'OFFER'></Section>
    </div>
  );
}

export default TaskDetail;

