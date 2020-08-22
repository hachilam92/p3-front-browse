import React, {useState} from 'react';
import classNames from 'classnames/bind';

import styles from './Question.module.scss';

function Question() {
  const [input, updateInput] = useState('');

  function handleChange(e) {
    updateInput(e.target.value);
  }

  const title = 'QUESTION';
  const notice = `Please don't share personal info – insurance won't apply to tasks done privately!`;
  const placeHolder = 'Ask a question';
  const cx = classNames.bind(styles);
  return (
    <div className ={cx('question')}>
      <div className = {cx('title-bar')}>
        <div className = {cx('title')}>{title}</div>
      </div>
      <div className = {cx('notice')}>
        {notice}
      </div>
      <div className = {cx('input-wrapper')}>
        <div className = {cx('avatar')}></div>
        <div className = {cx('input')}>
        <textarea 
          className = {cx('text-area')}
          placeholder = {placeHolder}
          value = {input}
          onChange = {handleChange}
        />
        </div>
      </div>
    </div>
  );
}

export default Question;