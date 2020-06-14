import React from 'react';

import './TeacherFilterBox.scss'

const TeacherFilterBox = props => {

  const { handleTeacherFilter } = props
  return (
    <div
      onClick={handleTeacherFilter}
      className="TeacherFilterBox"
    >
      <span>Filter By Teachers</span>
    </div>

  )
}


export default TeacherFilterBox
