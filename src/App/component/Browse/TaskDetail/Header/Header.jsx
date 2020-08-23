import React from 'react';
import classNames from 'classnames/bind';
import {connect} from 'react-redux';

import styles from './Header.module.scss';

import {PosterInfoList} from './PosterInfoList';
import {StatusList} from './StatusList'; 

function Header({
  title, 
  poster, 
  location, 
  due,  
}) {
  const cx = classNames.bind(styles);

  return (
    <div className = {cx('header')}>
      <div className = {cx('detail-panel')}>
        <div className = {cx('status-bar')}>
          <StatusList/>
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

function mapStateToProps(state) {
  const task = state.taskList[state.taskIndex];
  const {title, poster, location, due} = task;
  return {
    title, 
    poster, 
    location, 
    due,  
  };
}

export default connect(mapStateToProps)(Header);



