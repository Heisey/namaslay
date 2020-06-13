import React from 'react';
import './ClassesBox.scss';

const ClassesBox = props => {

  const { navState } = props;

  return (
    <div className={`ClassesBox ClassesBox--${!navState ? 'small' : 'large'}`}>
      Classes Box
    </div>
  )
}

export default ClassesBox
