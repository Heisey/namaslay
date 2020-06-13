import React from 'react';
import './TwoBox.scss';

const TwoBox = props => {
  const { navState } = props

  return (
    <div className={`TwoBox TwoBox--${!navState ? 'small' : 'large'}`}>
      two Box
    </div>
  )
}

export default TwoBox
