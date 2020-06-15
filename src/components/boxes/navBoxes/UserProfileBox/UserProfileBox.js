import React from 'react';
import './UserProfileBox.scss';

import SwordLogo from '../../../logos/SwordLogo/SwordLogo'

const UserProfileBox = props => {
  const { navState } = props

  return (
    <div className={`UserProfileBox UserProfileBox--${!navState ? 'small' : 'large'}`}>
      <span className="UserProfileBox__title--one">PRO</span>
      <span className="UserProfileBox__title--two">FILE</span>
      <div className="UserProfileBox__sword">
        <SwordLogo />
      </div>
    </div>
  )
}

export default UserProfileBox
