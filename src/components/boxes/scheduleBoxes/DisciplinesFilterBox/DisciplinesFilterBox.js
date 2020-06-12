import React from 'react';

const DisciplinesFilterBox = props => {

  const { handleDisciplinesFilter } = props
  return (
    <div
      onClick={handleDisciplinesFilter}
      className="DisciplinesFilterBox"
    >
      Disciplines
    </div>

  )
}


export default DisciplinesFilterBox
