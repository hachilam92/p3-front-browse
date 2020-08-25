import React from 'react';
import {connect} from 'react-redux';

import styles from './TaskDetail.module.scss';

import {Header} from './Header';
import {Section} from './Section';
import {SideBar} from './SideBar';
import {OfferButton} from './OfferButton';
import {Question} from './Question';


function TaskDetail({status, details}) {
  const active = (status !== 'expired');

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
          <OfferButton active = {active}/>
        </div>
      </Section>
      <Question/>
    </div>
  );
}

function mapStateToProps(state) {
  const task = state.taskList[state.taskIndex];
  const {status, details} = task;
  return {
    status, 
    details,  
  };
}

export default connect(mapStateToProps)(TaskDetail);

