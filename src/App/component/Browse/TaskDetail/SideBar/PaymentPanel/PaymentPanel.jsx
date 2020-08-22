import React from 'react';
import classNames from 'classnames/bind';

import styles from './PaymentPanel.module.scss';

import {TaskConsumer} from '../../../Context';
import {Button} from '../../../../Button';

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
        <Button label = {buttonLabel}/>
      </div>
    </div>
  );
}

export default PaymentPanel;