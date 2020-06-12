import React from 'react';

const ProgramsFilterBox = props => {

  const { handleProgramsFilter } = props
  return (
    <div
      onClick={handleProgramsFilter}
      className="ProgramsFilterBox"
    >
      Programs
    </div>

  )
}


export default ProgramsFilterBox
