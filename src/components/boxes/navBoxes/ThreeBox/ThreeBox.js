import React from 'react';
import './ThreeBox.scss';

const ThreeBox = props => {

  const { navState } = props

  return (
    <div className={`ThreeBox ThreeBox--${!navState ? 'small' : 'large'}`}>
      three Box
    </div>
  )
}

export default ThreeBox
