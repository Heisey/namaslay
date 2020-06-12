import React from 'react';

const DifficultiesFilterBox = props => {

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
