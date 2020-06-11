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
        key={detail.id}
        detail={detail}
        handleTypeSelection={handleTypeSelection}
      />
    )
  })

  return (
    <div className="DynamicDataPanel">
      {data && <div className="DynamicDataPanel__grid">{details}</div>}
      {data.length === 0 && <h1></h1>}
    </div>
  )
}

export default DynamicDataPanel
