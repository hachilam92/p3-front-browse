import React from 'react';
import classNames from 'classnames/bind';

import styles from './TaskDetail.module.scss';

import {Header} from './Header';
import {Section} from './Section';
import {SideBar} from './SideBar';
import {TaskConsumer} from '../Context';
import {Button} from '../../Button';

function TaskDetail() {
  const cx = classNames.bind(styles);
  const offerButtonLabel = 'Make an offer';

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
      <Section title = 'OFFER'>
        <div className = {cx('offer-icon')}></div>
        <div className = {cx('button-wrapper')}>
          <Button label = {offerButtonLabel}/>
        </div>
      </Section>
    </div>
  );
}

export default TaskDetail;

