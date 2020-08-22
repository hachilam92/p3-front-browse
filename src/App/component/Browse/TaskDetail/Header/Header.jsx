import React from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

import {PosterInfoList} from './PosterInfoList';
import {StatusList} from './StatusList'; 

function Header({info}) {
  const {title, status, poster, location, due} = info;
  const cx = classNames.bind(styles);

  return (
    <div className = {cx('header')}>
      <div className = {cx('detail-panel')}>
        <div className = {cx('status-bar')}>
          <StatusList status ={status}/>
        </div>
        <div className = {cx('title')}>
          <h1>{title}</h1>
        </div>
        <PosterInfoList>
          {poster}{location}{due}
        </PosterInfoList>
      </div>
      <div className ={cx('sidebar')}></div>
    </div>
 );
}

export default Header;



