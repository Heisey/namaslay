import React from 'react';
import './HomeBox.scss';

const HomeBox = props => {
  const { navState } = props
  return (
    <div className={`HomeBox HomeBox--${!navState ? 'small' : 'large'}`}>
      <span className="HomeBox__title">HOME</span>
      <div className="HomeBox__overlay">HOME</div>
    </div>
  )
}

export default HomeBox
