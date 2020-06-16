import React from 'react';

import SwordLogo from '../../../logos/SwordLogo/SwordLogo'

import './FiveClass.scss';

export default function FiveClass(props) {

  const { showFiveClasses, priceHandler } = props

  const handleshowFiveClasses = () => {
    showFiveClasses()
    priceHandler(44.99)
  }

  return (
    <div 
      onClick={handleshowFiveClasses}
      className="FiveClass"
    >
    <span>FIVE PASSES</span>
    <div className="FiveClass__sword--one">
      <SwordLogo />
    </div>
    <div className="FiveClass__sword--two">
      <SwordLogo />
    </div>
    </div>
  )
}