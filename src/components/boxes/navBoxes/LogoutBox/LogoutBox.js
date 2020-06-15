import React from 'react';
import './LogoutBox.scss';

import SwordLogo from '../../../logos/SwordLogo/SwordLogo'

const LogoutBox = props => {

  const { navState } = props

  return (
    <div className={`LogoutBox LogoutBox--${!navState ? 'small' : 'large'}`}>
      <span className="LogoutBox__title--one">LOG</span>
      <span className="LogoutBox__title--two">OUT</span>
      <div className="LogoutBox__sword">
        <SwordLogo />
      </div>
    </div>
  )
}

export default LogoutBox
