import React from 'react';

import './ProgramFilterBox.scss';

import SwordLogo from '../../../logos/SwordLogo/SwordLogo'

const ProgramsFilterBox = props => {

  const { handleProgramsFilter } = props
  return (
    <div
      onClick={handleProgramsFilter}
      className="ProgramsFilterBox"
    >
      <span>
        PROGRAMS
      </span>
      <div className="ProgramsFilterBox__sword--one">
        <SwordLogo />
      </div>
      <div className="ProgramsFilterBox__sword--two">
        <SwordLogo />
      </div>
    </div>

  )
}


export default ProgramsFilterBox
