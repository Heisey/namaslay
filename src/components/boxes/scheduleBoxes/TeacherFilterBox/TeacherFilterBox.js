import React from 'react';

import './TeacherFilterBox.scss'

import SwordLogo from '../../../logos/SwordLogo/SwordLogo'

const TeacherFilterBox = props => {

  const { handleTeacherFilter } = props
  return (
    <div
      onClick={handleTeacherFilter}
      className="TeacherFilterBox"
    >
      <span>TEACHERS</span>
      <div className="TeacherFilterBox__sword--one">
        <SwordLogo />
      </div>
      <div className="TeacherFilterBox__sword--two">
        <SwordLogo />
      </div>
    </div>
  )
}


export default TeacherFilterBox
