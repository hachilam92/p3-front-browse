import React from 'react';
import classNames from 'classnames/bind';

import styles from './PosterInfoList.module.scss';

import {PosterInfoItem} from './PosterInfoItem';

function PosterInfoList({children}) {
  const titleList = ['POSTED BY', 'LOCATION', 'DUE DATE'];

  const posterInfoList = titleList.map((title, index) =>
    <PosterInfoItem
      key = {title}
      title = {title}
      content = {children[index]}
    />
  );
  const cx = classNames.bind(styles);
  
  return (
    <div className = {cx('poster-info')}>
      {posterInfoList}
    </div>
  );
}

export default PosterInfoList;