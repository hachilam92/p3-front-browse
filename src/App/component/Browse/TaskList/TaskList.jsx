import React from 'react';

import styles from './TaskList.module.scss';

import TaskListItem from './TaskListItem';

function TaskList({ taskList, selectTask }) {
  const displayTasks = taskList.map((task) => 
    <TaskListItem
      key = {task.id}
      task = {task}
      onClick = {selectTask}
    />
  );

  return(
    <div className = {styles.task_list}>
      {displayTasks}
    </div>
  );
}

export default TaskList;