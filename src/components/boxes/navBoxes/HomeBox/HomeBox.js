import React from 'react';
import './HomeBox.scss';

const HomeBox = props => {
  const { navState } = props
  return (
    <div className={`HomeBox HomeBox--${!navState ? 'small' : 'large'}`}>
      Home Box
    </div>
  )
}

export default HomeBox
