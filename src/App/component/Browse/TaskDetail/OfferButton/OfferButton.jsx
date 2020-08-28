import React from 'react';
import classNames from 'classnames/bind';

import styles from './OfferButton.module.scss';

export default function OfferButton({ active }) {
  const activeLabel = 'Make an offer';
  const expireLabel = 'Expired';
  const buttonLabel = (active) ? activeLabel : expireLabel;

  const cx = classNames.bind(styles);

  return (
    <button className = {cx({
      button: true,
      active: active === true,
      expired: active === false,  
    })}>
      {buttonLabel}
    </button>
  );
}

