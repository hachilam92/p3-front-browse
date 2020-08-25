import React from 'react';

import styles from './SideBar.module.scss';

import {PaymentPanel} from './PaymentPanel';

function SideBar() {
  return(
    <div className = {styles.side_bar}>
      <PaymentPanel/>
    </div>
  );
}

export default SideBar;