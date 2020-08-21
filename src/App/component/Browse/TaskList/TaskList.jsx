import React from 'react';
import classNames from 'classnames/bind';

import styles from './TaskList.module.scss';

import {TaskListItem} from './TaskListItem';

function TaskList({children}) {
  const taskList = children.map((data) => 
    <TaskListItem
      key = {data.id}
      data = {data}
    />
  );
  const cx = classNames.bind(styles);
  return(
    <div className = {cx('task-list')}>
      {taskList}
    </div>
  );
}

export default TaskList;