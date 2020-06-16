import React from 'react';

import './DifficultiesFilterBox.scss'

import SwordLogo from '../../../logos/SwordLogo/SwordLogo'

const DifficultiesFilterBox = props => {

  const { handleDifficultiesFilter } = props
  return (
    <div
      onClick={handleDifficultiesFilter}
      className="DifficultiesFilterBox"
    >
      <span>DIFFICULTY</span>
      <div className="DifficultiesFilterBox__sword--one">
        <SwordLogo />
      </div>
      <div className="DifficultiesFilterBox__sword--two">
        <SwordLogo />
      </div>
    </div>
  )
}


export default DifficultiesFilterBox
