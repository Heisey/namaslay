import React from 'react';
import './TeacherBox.scss';

const TeacherBox = props => {

  const { navState } = props

  return (
    <div className={`TeacherBox TeacherBox--${!navState ? 'small' : 'large'}`}>
      Teacher Box
    </div>
  )
}

export default TeacherBox
