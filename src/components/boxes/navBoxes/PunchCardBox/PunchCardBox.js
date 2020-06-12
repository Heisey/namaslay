import React from 'react';
import './PunchCardBox.scss';

const PunchCardBox = props => {

  const { navState } = props
  return (
    <div className={`PunchCardBox PunchCardBox--${!navState ? 'small' : 'large'}`}>
      PunchCardBox
    </div>
  )
}

export default PunchCardBox
