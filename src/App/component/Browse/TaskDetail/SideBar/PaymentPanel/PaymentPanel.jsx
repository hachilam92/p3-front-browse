import React from 'react';
import {connect} from 'react-redux';

import styles from './PaymentPanel.module.scss';

import OfferButton from '../../OfferButton';

function PaymentPanel({status, budget}) {
  const title = 'TASK BUDGET';
  const active = (status !== 'expired');

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

const mapStateToProps = ({taskList, taskIndex}) => {
  const task = taskList[taskIndex];
  const {status, budget} = task;
  return {
    status,
    budget,   
  };
}

export default connect(mapStateToProps)(PaymentPanel);