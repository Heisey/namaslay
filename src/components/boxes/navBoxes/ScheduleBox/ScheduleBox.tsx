import React from 'react';
import './ScheduleBox.scss';

interface ScheduleBoxProps {
  navState: boolean
}
const ScheduleBox: React.FC <ScheduleBoxProps> = props => {
  const { navState } = props
  return (
    <div className={`ScheduleBox ScheduleBox--${!navState ? 'small': 'large'}`}>
      ScheduleBox
    </div>
  )
}

export default ScheduleBox
