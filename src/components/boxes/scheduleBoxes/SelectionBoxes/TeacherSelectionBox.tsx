import React from 'react';

interface TeacherSelectionBoxProps {
  key: number;
  detail: any;
  onClick: any;
}

const TeacherSelectionBox: React.FC<TeacherSelectionBoxProps> = props => {

  const { detail, onClick } = props

  return (
    <div className="TeacherSelectionBox">
      <li onClick={onClick}>{detail}</li>
    </div>
  )
}
export default TeacherSelectionBox
