import React from 'react';
import classNames from 'classnames/bind';

import styles from './PosterInfoItem.module.scss';

function PosterInfoItem({title, content}) {
  const cx = classNames.bind(styles);
  const displayContent = (content.name)? content.name : content;
  return (
    <div className = {cx('poster-info-item')}>
      <div className = {cx('icon-wrapper')}>
        <div className = {cx({
          'avatar': title === 'POSTED BY',
          'location-icon': title === 'LOCATION',
          'date-icon': title === 'DUE DATE', 
        })}>
          {(title === 'POSTED BY')?
            <img src = {content.avatar} alt = 'avatar'/>
          : 
            ''
          }
        </div>
      </div>
      <div className = {cx('poster-detail')}>
        <div className = {cx('title')}>{title}</div>
        <div className = {cx('content')}>{displayContent}</div>
      </div>
    </div>
    
  );
}

export default PosterInfoItem;