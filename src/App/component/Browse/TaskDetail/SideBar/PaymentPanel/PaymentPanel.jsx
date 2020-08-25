import React from 'react';
import {connect} from 'react-redux';

import styles from './PaymentPanel.module.scss';

import {OfferButton} from '../../OfferButton';

function PaymentPanel({status, budget}) {
  const title = 'TASK BUDGET';
  const active = (status !== 'expired');
  console.log(status);
  return(
    <div className = {styles.payment_panel}>
      <div className = {styles.title}>
        {title}
      </div>
      <div className = {styles.price}>
        ${budget}
      </div>
      <div className = {styles.button_wrapper}>
        <OfferButton active = {active}/>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const task = state.taskList[state.taskIndex];
  const {status, budget} = task;
  return {
    status,
    budget,   
  };
}

export default connect(mapStateToProps)(PaymentPanel);