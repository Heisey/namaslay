import React from 'react';

import SwordLogo from '../../../logos/SwordLogo/SwordLogo'

import './OneClass.scss';

export default function OneClass(props) {

  const { showSingleClasses, priceHandler } = props

  const handlwShowSingClass = () => {
    showSingleClasses()
    priceHandler(9.99)
  }
  return (
    <div 
      className="OneClass"
      onClick={handlwShowSingClass}
    >
      <span>SINGLE PASS</span>
      <div className="OneClass__sword--one">
        <SwordLogo />
      </div>
      <div className="OneClass__sword--two">
        <SwordLogo />
      </div>
    </div>
  )
}