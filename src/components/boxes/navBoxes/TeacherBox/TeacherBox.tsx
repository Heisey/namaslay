import React from 'react';
import './TeacherBox.scss';

interface TeacherBoxProps {
  navState: boolean
}

const TeacherBox: React.FC <TeacherBoxProps> = props => {

  const { navState } = props
  
  return (
    <div className={`TeacherBox TeacherBox--${!navState ? 'small': 'large'}`}>
      Teacher Box
    </div>
  )
}

export default TeacherBox
