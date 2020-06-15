import React from 'react';
import './LogoutBox.scss';

const LogoutBox = props => {

  const { navState } = props

  return (
    <div className={`LogoutBox LogoutBox--${!navState ? 'small' : 'large'}`}>
      Logout
    </div>
  )
}

export default LogoutBox
