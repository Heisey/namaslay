import React from 'react';

const TeacherFilterBox = props => {

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
