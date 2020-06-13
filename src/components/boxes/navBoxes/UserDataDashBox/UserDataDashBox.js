import React from 'react';
import './UserDataDashBox.scss';

const UserDataDashBox = props => {
  const { navState } = props

  return (
    <div className={`UserDataDashBox UserDataDashBox--${!navState ? 'small' : 'large'}`}>
      User Data Dasboard
    </div>
  )
}

export default UserDataDashBox
