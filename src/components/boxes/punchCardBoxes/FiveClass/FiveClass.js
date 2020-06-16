import React from 'react';

import SwordLogo from '../../../logos/SwordLogo/SwordLogo'

import './FiveClass.scss';

export default function FiveClass(props) {

  const { showFiveClasses } = props

  const handleshowFiveClasses = () => {
    showFiveClasses()
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