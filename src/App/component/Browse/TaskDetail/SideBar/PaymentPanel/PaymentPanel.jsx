import React from 'react';
import classNames from 'classnames/bind';
import {connect} from 'react-redux';

import styles from './PaymentPanel.module.scss';

import {Button} from '../../../../Button';

function PaymentPanel({budget}) {
  const cx = classNames.bind(styles);
  const title = 'TASK BUDGET';
  const buttonLabel = 'Make an offer';
  return(
    <div className = {cx('payment-panel')}>
      <div className = {cx('title')}>
        {title}
      </div>
      <div className = {cx('price')}>
        ${budget}
      </div>
      <div className = {cx('button-wrapper')}>
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