import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

function Button({label}) {
  const cx = classNames.bind(styles);
  return (
    <button className = {cx('button')}>{label}</button>
  );
}

export default Button;