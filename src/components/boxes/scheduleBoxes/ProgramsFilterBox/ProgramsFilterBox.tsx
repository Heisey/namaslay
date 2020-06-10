import React from 'react';

interface ProgramsFilterBoxProps {
  handleProgramsFilter: () => void
}

const ProgramsFilterBox: React.FC<ProgramsFilterBoxProps> = props => {

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
