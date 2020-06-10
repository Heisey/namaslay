import React from 'react';

interface TeacherFilterBoxProps {
  handleTeacherFilter: () => void
}

const TeacherFilterBox: React.FC<TeacherFilterBoxProps> = props => {

  const { handleTeacherFilter } = props
  return (
    <div
      onClick={handleTeacherFilter}
      className="TeacherFilterBox"
    >
      Teachers
    </div>

  )
}


export default TeacherFilterBox
