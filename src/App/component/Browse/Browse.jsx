import React from 'react';
import classNames from 'classnames/bind';

import styles from './Browse.module.scss';

import {TaskList} from './TaskList';
import {TaskDetail} from './TaskDetail'
import {setTaskProvider} from './Context';
import { SetTaskProvider } from './Context/TaskContext';

const testData = {
  title: 'Roof repair',
  status: 'open',
  budget: '120',
  poster: {
    name: 'Tifa',
    avatar: "../../../../../img/avatar-64.png"
  },
  location: 'Kurunjang VIC 3337, Australia',
  due: 'Monday, 24th Aug 2020',
  details: `-remove existing bamboo fence - supply and install new fence (open for ideas)
            - install synthetic turf
            - landscaping design and install
            - remove and upgrade existing waterfall feature into the pool`,
};

function createData(size, data) {
  const dataArray = [];
  for(let i = 0; i < size; i ++) {
    const newData = {...data};
    newData.id = i;
    dataArray.push(newData);
  }
  return dataArray;
}

const dataArray = createData(10, testData);
const currentData = dataArray[0];

function Browse() {
  
  const cx = classNames.bind(styles);
  return(
    <div className = {cx('browse')}>
      <TaskList>
        {dataArray}
      </TaskList>
      <SetTaskProvider task = {currentData}>
        <TaskDetail/>
      </SetTaskProvider>
    </div>
  );
}

export default Browse;