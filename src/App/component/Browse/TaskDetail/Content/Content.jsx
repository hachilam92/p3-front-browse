import React from 'react';
import classNames from 'classnames/bind';

import styles from './Content.module.scss';

function Content({details}) {
  const cx = classNames.bind(styles);
  return (
    <div className = {cx('content')}>
      <h2>Details</h2>
      <p>{details}</p>
    </div>
  );
}

export default Content;