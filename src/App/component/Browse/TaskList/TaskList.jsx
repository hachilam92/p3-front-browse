import React from 'react';
import classNames from 'classnames/bind';
import {connect} from 'react-redux';

import styles from './TaskList.module.scss';

import {TaskListItem} from './TaskListItem';

function TaskList({taskList}) {
  const displayTasks = taskList.map((data) => 
    <TaskListItem
      key = {data.id}
      data = {data}
    />
  );
  const cx = classNames.bind(styles);
  return(
    <div className = {cx('task-list')}>
      {displayTasks}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    taskList: state.taskList
  }
}

export default connect(mapStateToProps)(TaskList);