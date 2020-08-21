import React from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

import {PosterInfoList} from './PosterInfoList';

function Header({info}) {
  const {title, status, budget, poster, location, due} = info;
  const {name} = poster;
  const cx = classNames.bind(styles);
  console.log(poster);
  return (
    <div className = {cx('header')}>
      <div className = {cx('detail-panel')}>
        <div className = {cx('status')}>{status}</div>
        <div className = {cx('title')}>{title}</div>
        <PosterInfoList>
          {poster}{location}{due}
        </PosterInfoList>
      </div>
      <div className ={cx('sidebar')}></div>
    </div>
 );
}

export default Header;



