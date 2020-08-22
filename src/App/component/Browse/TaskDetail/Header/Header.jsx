import React from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

import {PosterInfoList} from './PosterInfoList';
import {StatusList} from './StatusList'; 
import {TaskConsumer} from '../../Context';

function Header() {
  const cx = classNames.bind(styles);

  return (
    <div className = {cx('header')}>
      <div className = {cx('detail-panel')}>
        <div className = {cx('status-bar')}>
          <StatusList/>
        </div>
        <TaskConsumer>
          {value =>
            <>
              <div className = {cx('title')}>
                <h1>{value.title}</h1>
              </div>
              <PosterInfoList>
                {value.poster}{value.location}{value.due}
              </PosterInfoList>
            </>
          }
        </TaskConsumer>
      </div>
      <div className ={cx('sidebar')}></div>
    </div>
    
 );
}

export default Header;



