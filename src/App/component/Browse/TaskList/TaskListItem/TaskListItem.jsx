import React from 'react';

import styles from './TaskListItem.module.scss';

function TaskListItem(props) {
  const {
    title,
    status,
    budget,
    poster,
    location,
    due,
    id
  } = props.data;

  function handleClick() {
    props.onClick(id);
  }

  return(
    <div 
      className = {styles.task_list_item}
      onClick = {handleClick}
    >
      <div className = {styles.header}>
        <div className = {styles.title}>
          {title}
        </div>
        <div className = {styles.budget}>
          ${budget}
        </div>
      </div>
      <div className = {styles.content}>
        <div className = {styles.avatar}>
          <img src = {poster.avatar} alt = 'avatar'/>
        </div>
        <div className = {styles.location}>
          {location}
        </div>
        <div className = {styles.due}>
          {due}
        </div>
      </div>
      <div className = {styles.footer}>
        <div className = {styles.status}>
          {status}
        </div>
      </div>
    </div>
  );
}

export default TaskListItem