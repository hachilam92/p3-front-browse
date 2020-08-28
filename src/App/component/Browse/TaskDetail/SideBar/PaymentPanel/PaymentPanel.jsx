import React from 'react';
import {connect} from 'react-redux';

import styles from './PaymentPanel.module.scss';

import OfferButton from '../../OfferButton';
import { selectTask } from '../../../../Redux/Browse/selector';
import { createStructuredSelector } from 'reselect';

function PaymentPanel({task}) {
  const {status, budget} = task;

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

const mapStateToProps = createStructuredSelector({
  task: selectTask, 
});

export default connect(mapStateToProps)(PaymentPanel);