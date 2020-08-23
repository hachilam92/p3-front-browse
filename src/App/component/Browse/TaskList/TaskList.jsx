import React from 'react';
import classNames from 'classnames/bind';
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

function mapDispatchToProps(dispatch) {
  return {
    select: (index) => {
      console.log('select');
      return dispatch(Action.select(index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);