import React from 'react';

import './DisciplinesFilterBox.scss'

import SwordLogo from '../../../logos/SwordLogo/SwordLogo'

const DisciplinesFilterBox = props => {

  const { handleDisciplinesFilter } = props
  return (
    <div
      onClick={handleDisciplinesFilter}
      className="DisciplinesFilterBox"
    >
      <span>
        DISCIPLINE
      </span>
      <div className="DisciplinesFilterBox__sword--one">
        <SwordLogo />
      </div>
      <div className="DisciplinesFilterBox__sword--two">
        <SwordLogo />
      </div>
    </div>

  )
}


export default DisciplinesFilterBox
