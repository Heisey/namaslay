import React from 'react';
import './TeacherBox.scss';

import SwordLogo from '../../../logos/SwordLogo/SwordLogo'

const TeacherBox = props => {

  const { navState,  teacherFilterSelected } = props

  return (
    <div className={`TeacherBox ${teacherFilterSelected && 'selected'} TeacherBox--${!navState ? 'small' : 'large'}`}>
      <span className="TeacherBox__title--one">TEAC</span>
      <span className="TeacherBox__title--two">HERS</span>
      <div className="TeacherBox__sword">
        <SwordLogo navState={navState} />
      </div>
    </div>
  )
}

export default TeacherBox
