import React from 'react';
import {connect} from 'react-redux';

import styles from './TaskDetail.module.scss';

import {Header} from './Header';
import {Section} from './Section';
import {SideBar} from './SideBar';
import {Button} from '../../Button';
import {Question} from './Question';

function TaskDetail({details, id}) {
  const offerButtonLabel = 'Make an offer';
  console.log(id);

  return(
    <div className = {styles.task_detail}>
      <SideBar/>
      <Header/>
      <Section title = 'DETAILS'>
        {details}
      </Section>
      <Section title = 'OFFER'>
        <div className = {styles.offer_icon}></div>
        <div className = {styles.button_wrapper}>
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

