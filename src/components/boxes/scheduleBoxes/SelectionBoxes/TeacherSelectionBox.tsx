import React from 'react';

import './TeacherSelectionBox.scss'
interface TeacherSelectionBoxProps {
  key: number;
  detail: any;
  handleTypeSelection: any;
}

const TeacherSelectionBox: React.FC<TeacherSelectionBoxProps> = props => {

  const { detail, handleTypeSelection } = props

  const handleSelected = () => {
    handleTypeSelection(detail.id)
  }

  return (
    <div 
      id={detail.id}
      className="TeacherSelectionBox"
      style={{
        backgroundImage: `url(${detail.imageurl})`
      }}
      onClick={handleSelected}
    >
      
    </div>
  )
}
export default TeacherSelectionBox
