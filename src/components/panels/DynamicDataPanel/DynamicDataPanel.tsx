import React, { useState } from 'react'
import './DynamicDataPanel.scss'
import TeacherSelectionBox from '../../boxes/scheduleBoxes/SelectionBoxes/TeacherSelectionBox'

interface DynamicDataPanelProps {
  data: any[];
  handleTypeSelection: any;
}

const DynamicDataPanel: React.FC<DynamicDataPanelProps> = props => {

  const { data, handleTypeSelection } = props

  const tempData = [...data]
  const type: string = tempData.pop()
  const details = tempData.map((detail, i) => {
    return (
      <TeacherSelectionBox
        key={i + 1}
        detail={detail}
        onClick={handleTypeSelection}
      />
    )
  })

  return (
    <div className="DynamicDataPanel">
      {data.length !== 0 && <h3>Select Your {type}:</h3>}
      <ul>{details}</ul>
    </div>
  )
}

export default DynamicDataPanel
