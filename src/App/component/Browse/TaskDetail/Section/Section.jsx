import React from 'react';
import classNames from 'classnames/bind';

import styles from './Section.module.scss';

function Section({title, children}) {
  const cx = classNames.bind(styles);
  return(
    <div className = {cx('section')}>
      <div className = {cx('title')}>
        {title}
      </div>
      <div className = {cx('content')}>
        {children}
      </div>
    </div>
  );
}

export default Section;