import React from 'react';
import {connect} from 'react-redux';

import styles from './PaymentPanel.module.scss';

import {Button} from '../../../../Button';

function PaymentPanel({budget}) {
  const title = 'TASK BUDGET';
  const buttonLabel = 'Make an offer';
  return(
    <div className = {styles.payment_panel}>
      <div className = {styles.title}>
        {title}
      </div>
      <div className = {styles.price}>
        ${budget}
      </div>
      <div className = {styles.button_wrapper}>
        <Button label = {buttonLabel}/>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const task = state.taskList[state.taskIndex];
  const {budget} = task;
  return {
    budget  
  };
}

export default connect(mapStateToProps)(PaymentPanel);