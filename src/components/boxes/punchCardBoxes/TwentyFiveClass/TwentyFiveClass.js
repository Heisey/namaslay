import React from 'react';

import SwordLogo from '../../../logos/SwordLogo/SwordLogo'

import './TwentyFiveClass.scss';

export default function TwentyFiveClass(props) {

  const { showTwentyFiveClasses } = props

  const handleshowTwentyFiveClasses = () => {
    showTwentyFiveClasses()
  }

  return (
    <div 
      className="TwentyFiveClass"
      onClick={handleshowTwentyFiveClasses}
    >
      <span>TWENTY FIVE PASSES</span>
      <div className="TwentyFiveClass__sword--one">
        <SwordLogo />
      </div>
      <div className="TwentyFiveClass__sword--two">
        <SwordLogo />
      </div>
    </div>
  )
}