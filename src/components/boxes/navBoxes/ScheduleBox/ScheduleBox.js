import React from 'react';
import './ScheduleBox.scss';

const ScheduleBox = props => {

  const { navState } = props

  return (
    <div className={`ScheduleBox ScheduleBox--${!navState ? 'small' : 'large'}`}>
      {navState && <div className="ScheduleBox__TextBox">
        <p className="ScheduleBox__TextBox-text">Class</p>
        <p className="ScheduleBox__TextBox-text">Schedule</p>
      </div>}
    </div>
  )
}

export default ScheduleBox
