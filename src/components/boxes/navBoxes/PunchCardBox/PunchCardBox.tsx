import React from 'react';
import './PunchCardBox.scss';

interface PunchCardBoxProps {
  navState: boolean
}

const PunchCardBox: React.FC <PunchCardBoxProps> = props => {

  const { navState } = props
  return (
    <div className={`PunchCardBox PunchCardBox--${!navState ? 'small': 'large'}`}>
      PunchCardBox
    </div>
  )
}

export default PunchCardBox
