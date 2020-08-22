import React from 'react';
import classNames from 'classnames/bind';

import styles from './PaymentPanel.module.scss';

import {TaskConsumer} from '../../../Context';

function PaymentPanel() {
  const cx = classNames.bind(styles);
  const title = 'TASK BUDGET';
  const buttonLabel = 'Make an offer';
  return(
    <div className = {cx('payment-panel')}>
      <div className = {cx('title')}>
        {title}
      </div>
      <TaskConsumer>
        {value => 
          <div className = {cx('price')}>
            ${value.budget}
          </div>
        }
      </TaskConsumer>
      <div className = {cx('button-wrapper')}>
        <button className = {cx('button')}>{buttonLabel}</button>
      </div>
    </div>
  );
}

export default PaymentPanel;