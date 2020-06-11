import React from 'react';

interface ClearFilterBoxProps {
  clearFilters: () => void
}

const ClearFilterBox: React.FC <ClearFilterBoxProps> = props => {

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