import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import styles from './StatusList.module.scss';

import { selectTask } from '../../../../Redux/Browse/selector';
import { createStructuredSelector } from 'reselect';

function StatusList({ task }) {
  const { status } = task;

  const cx = classNames.bind(styles);

  const statusNameList = ['open', 'assigned', 'completed', 'expired'];
  const statusList = statusNameList.map((statusName) =>
    <div 
      className = {cx(
        {
          status: true,
          active: status.toUpperCase() === statusName.toUpperCase(),
        },
        statusName
      )}
      key = {statusName}
    >
      {statusName}
    </div>
  );

  return (
    <div className = {styles.status_list}>
      {statusList}
    </div>
  );

}

const mapStateToProps = createStructuredSelector({
  task: selectTask, 
});

export default connect(mapStateToProps)(StatusList);