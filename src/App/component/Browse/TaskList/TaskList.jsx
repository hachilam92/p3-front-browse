import React from 'react';
import {connect} from 'react-redux';

import styles from './TaskList.module.scss';

import {TaskListItem} from './TaskListItem';
import * as Action from '../Store/Action';

function TaskList(props) {

  const displayTasks = props.taskList.map((task) => 
    <TaskListItem
      key = {task.id}
      task = {task}
      onClick = {props.select}
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
      console.log('select');
      return dispatch(Action.select(index));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);