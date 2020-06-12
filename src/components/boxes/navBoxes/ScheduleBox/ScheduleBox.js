import React from 'react';
import './ScheduleBox.scss';

const ScheduleBox = props => {

  const { navState } = props

  return (
    <div className={`ScheduleBox ScheduleBox--${!navState ? 'small' : 'large'}`}>
      ScheduleBox
    </div>
  )
}

export default ScheduleBox
