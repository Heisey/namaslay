import React from 'react';

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
      clear
    </div>
  )
}

export default ClearFilterBox
