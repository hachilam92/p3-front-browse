import React from 'react';
import {connect} from 'react-redux';

import styles from './TaskList.module.scss';

import TaskListItem from './TaskListItem';
import * as Action from '../Store/Action';

function TaskList({taskList, select}) {
  const displayTasks = taskList.map((task) => 
    <TaskListItem
      key = {task.id}
      task = {task}
      onClick = {select}
    />
  );

  return(
    <div className = {styles.task_list}>
      {displayTasks}
    </div>
  );
}

const mapStateToProps = ({taskList}) => ({taskList});

const mapDispatchToProps = (dispatch) => ({
    select: (index) => {
      return dispatch(Action.select(index));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);