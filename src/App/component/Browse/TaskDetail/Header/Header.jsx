import React from 'react';
import {connect} from 'react-redux';

import styles from './Header.module.scss';

import PosterInfoList from './PosterInfoList';
import StatusList from './StatusList'; 
import { selectTask } from '../../../Redux/Browse/selector';
import { createStructuredSelector } from 'reselect';

function Header({task}) {
  const {
    title, 
    poster, 
    location, 
    due,  
  } = task;

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

const mapStateToProps = createStructuredSelector({
  task: selectTask, 
});

export default connect(mapStateToProps)(Header);



