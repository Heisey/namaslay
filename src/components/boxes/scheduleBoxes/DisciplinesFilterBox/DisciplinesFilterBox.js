import React from 'react';

import './DisciplinesFilterBox.scss'

const DisciplinesFilterBox = props => {

  const { handleDisciplinesFilter } = props
  return (
    <div
      onClick={handleDisciplinesFilter}
      className="DisciplinesFilterBox"
    >
      <span>
        Filter By Discipline
      </span>
    </div>

  )
}


export default DisciplinesFilterBox
