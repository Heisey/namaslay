import React, { useState } from 'react'

const ClassSelectionPanelItem = props => {
  const { 
    program,
    secondaryDataPanelHandler, 
    renderOverlayHandler, 
    selectedClassHandler  
  } = props

  const [focused, focusedHandler] = useState(false)

  const handleBooking = () => {
    renderOverlayHandler(true)
  }

  const handleSelectedClass = (e) => {
    selectedClassHandler(e.target.id)
    focusedHandler(true)
  }

  return (
      <li
        key={program.id}
        id={program.id}
        onClick={handleSelectedClass}
        className={`ClassSelectionPanel__listItem ClassSelectionPanel__listItem--${focused ? 'focused' : 'unfocused'}`}
      >
        <div className="ClassSelectionPanel__listInfo">
          <span className='ClassSelectionPanel__listItem--time'>{program.start_time}:00</span>
          <span className='ClassSelectionPanel__listItem--name'>{program.name}</span>
          <span className='ClassSelectionPanel__listItem--spots'>{program.spotsavailable}</span>
          <span className='ClassSelectionPanel__listItem--difficulty'>{program.difficulty}</span>
        </div>
        
        <div 
          className={`ClassSelectionPanel__listItem--button ClassSelectionPanel__listItem--${!focused ? 'hideButton' : 'showButton'}`}
          onClick={handleBooking}  
        >
          Book
        </div>
      </li>
     
  )
}

export default ClassSelectionPanelItem