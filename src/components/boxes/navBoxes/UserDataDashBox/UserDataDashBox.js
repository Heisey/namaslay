import React from 'react';
import './UserDataDashBox.scss';

import SwordLogo from '../../../logos/SwordLogo/SwordLogo'

const UserDataDashBox = props => {
  const { navState } = props

  return (
    <div className={`UserDataDashBox UserDataDashBox--${!navState ? 'small' : 'large'}`}>
    <span className="UserDataDashBox__title--one">DASH</span>
    <span className="UserDataDashBox__title--two">BOARD</span>
    <div className="UserDataDashBox__sword">
      <SwordLogo navState={navState} />
    </div>
    </div>
  )
}

export default UserDataDashBox
