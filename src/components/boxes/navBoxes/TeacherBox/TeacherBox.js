import React from 'react';
import './TeacherBox.scss';

import SwordLogo from '../../../logos/SwordLogo/SwordLogo'

const TeacherBox = props => {

  const { navState } = props

  return (
    <div className={`TeacherBox TeacherBox--${!navState ? 'small' : 'large'}`}>
      <span className="TeacherBox__title--one">TEAC</span>
      <span className="TeacherBox__title--two">HERS</span>
      <div className="TeacherBox__sword">
        <SwordLogo navState={navState} />
      </div>
    </div>
  )
}

export default TeacherBox
