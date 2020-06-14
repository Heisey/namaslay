import React from 'react';

import './DifficultiesFilterBox.scss'

const DifficultiesFilterBox = props => {

  const { handleDifficultiesFilter } = props
  return (
    <div
      onClick={handleDifficultiesFilter}
      className="DifficultiesFilterBox"
    >
      <span>Filter By Difficulty</span>
    </div>
  )
}


export default DifficultiesFilterBox
