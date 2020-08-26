import React from 'react';
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

  return (
    <div className = {styles.header}>
      <div className = {styles.detail_panel}>
        <div className = {styles.status_bar}>
          <StatusList/>
        </div>
        <div className = {styles.title}>
          <h1>{title}</h1>
        </div>
        <PosterInfoList>
          {poster}{location}{due}
        </PosterInfoList>
      </div>
      <div className ={styles.sidebar}></div>
    </div>
    
 );
}

const mapStateToProps = ({taskList, taskIndex}) => {
  const task = taskList[taskIndex];
  const {title, poster, location, due} = task;
  return {
    title, 
    poster, 
    location, 
    due,  
  };
}

export default connect(mapStateToProps)(Header);



