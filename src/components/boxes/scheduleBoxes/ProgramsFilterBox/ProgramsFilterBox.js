import React from 'react';

import './ProgramFilterBox.scss';

const ProgramsFilterBox = props => {

  const { handleProgramsFilter } = props
  return (
    <div
      onClick={handleProgramsFilter}
      className="ProgramsFilterBox"
    >
      <span>
        Sort By Program
      </span>
    </div>

  )
}


export default ProgramsFilterBox
