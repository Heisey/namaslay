import React from 'react';

import SwordLogo from '../../../logos/SwordLogo/SwordLogo'

import './Unlimited.scss';

export default function Unlimited(props) {

  const { showUnlimited } = props

  const handleshowUnlimited = () => {
    showUnlimited()
  }

  return (
    <div 
      className="Unlimited"
      onClick={handleshowUnlimited}
    >
      <span>UNLIMITED</span>
      <div className="Unlimited__sword--one">
        <SwordLogo />
      </div>
      <div className="Unlimited__sword--two">
        <SwordLogo />
      </div>
    </div>
  )
}