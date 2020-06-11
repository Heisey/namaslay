import React, { useState } from 'react'

// interface ClassSelectionPanelItem {
//   program: any,
//   selectedClassHandler: any,
//   secondaryDataPanelHandler: any,
//   renderOverlayHandler: any
// }

const ClassSelectionPanelItem = props => {
  const { 
    program,
    secondaryDataPanelHandler, 
    renderOverlayHandler, 
    selectedClassHandler  
  } = props

  const [focused, focusedHandler] = useState(false)

  const handleSelectedClass = (e) => {
    selectedClassHandler(e.target.id)
    renderOverlayHandler(true)
    
  }

  return (
      <li
        key={program.id}
        id={program.id}
        onClick={handleSelectedClass}
        className={`ClassSelectionPanel__listItem ClassSelectionPanel__listItem--${focused ? 'focused' : 'unfocused'}`}
      >
        <span className='ClassSelectionPanel__listItem--time'>{program.start_time}:00</span>
        <span className='ClassSelectionPanel__listItem--name'>{program.name}</span>
        <span className='ClassSelectionPanel__listItem--spots'>{program.spotsavailable}</span>
        <span className='ClassSelectionPanel__listItem--difficulty'>{program.difficulty}</span>
      </li>
  )
}

export default ClassSelectionPanelItem