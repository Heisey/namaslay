import React from 'react';

interface DifficultiesFilterBoxProps {
  handleDifficultiesFilter: () => void
}

const DifficultiesFilterBox: React.FC<DifficultiesFilterBoxProps> = props => {

  const { handleDifficultiesFilter } = props
  return (
    <div
      onClick={handleDifficultiesFilter}
      className="DifficultiesFilterBox"
    >
      Difficulties
    </div>

  )
}


export default DifficultiesFilterBox
