import React from 'react';

interface DisciplinesFilterBoxProps {
  handleDisciplinesFilter: () => void
}

const DisciplinesFilterBox: React.FC<DisciplinesFilterBoxProps> = props => {

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
