import React from 'react';
import classNames from 'classnames/bind';

import styles from './SideBar.module.scss';

import {PaymentPanel} from './PaymentPanel';

function SideBar({children}) {
  const cx = classNames.bind(styles);
  return(
    <div className = {cx('side-bar')}>
      <PaymentPanel budget = {children}/>
    </div>
  );
}

export default SideBar;