import React from 'react';
import classNames from 'classnames/bind';
import {connect} from 'react-redux';

import styles from './TaskDetail.module.scss';

import {Header} from './Header';
import {Section} from './Section';
import {SideBar} from './SideBar';
import {Button} from '../../Button';
import {Question} from './Question';

function TaskDetail({details, id}) {
  const cx = classNames.bind(styles);
  const offerButtonLabel = 'Make an offer';
  console.log(id);

  return(
    <div className = {cx('task-detail')}>
      <SideBar/>
      <Header/>
      <Section title = 'DETAILS'>
        {details}
      </Section>
      <Section title = 'OFFER'>
        <div className = {cx('offer-icon')}></div>
        <div className = {cx('button-wrapper')}>
          <Button label = {offerButtonLabel}/>
        </div>
      </Section>
      <Question/>
    </div>
  );
}

function mapStateToProps(state) {
  const task = state.taskList[state.taskIndex];
  return {
    details: task.details,
    id: task.id 
  };
}

export default connect(mapStateToProps)(TaskDetail);

