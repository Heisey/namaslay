import React from 'react';
import './OneBox.scss';

const OneBox = props => {

  const { navState } = props

  return (
    <div className={`OneBox OneBox--${!navState ? 'small' : 'large'}`}>
      OneBox
    </div>
  )
}

export default OneBox
