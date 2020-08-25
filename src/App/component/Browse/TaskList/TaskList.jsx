import React from 'react';
import {connect} from 'react-redux';

import styles from './TaskList.module.scss';

import {TaskListItem} from './TaskListItem';
import * as Action from '../Store/Action';

function TaskList(props) {

  const displayTasks = props.taskList.map((data) => 
    <TaskListItem
      key = {data.id}
      data = {data}
      onClick = {props.select}
    />
  );

  return(
    <div className = {styles.task_list}>
      {displayTasks}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    taskList: state.taskList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    select: (index) => {
      console.log('select');
      return dispatch(Action.select(index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);