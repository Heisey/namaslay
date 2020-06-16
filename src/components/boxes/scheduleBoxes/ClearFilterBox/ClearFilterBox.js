import React from 'react';

import SwordLogo from '../../../logos/SwordLogo/SwordLogo'

import './ClearFilterBox.scss'

const ClearFilterBox = props => {

  const { clearFilters } = props

  const handleClearFilters = () => {
    clearFilters()
  }
  return (
    <div
      className='ClearFilterBox'
      onClick={handleClearFilters}
    >
      <span>CLEAR FILTERS</span>
      <div className="ClearFilterBox__sword--one">
        <SwordLogo />
      </div>
      <div className="ClearFilterBox__sword--two">
        <SwordLogo />
      </div>
    </div>
  )
}

export default ClearFilterBox
