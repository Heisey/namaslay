import React from 'react';
import './UserProfileBox.scss';

const UserProfileBox = props => {
  const { navState } = props

  return (
    <div className={`UserProfileBox UserProfileBox--${!navState ? 'small' : 'large'}`}>
      UserProfileBox
    </div>
  )
}

export default UserProfileBox
