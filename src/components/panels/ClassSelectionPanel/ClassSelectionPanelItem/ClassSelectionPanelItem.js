import React, { useState } from 'react'
import axios from 'axios'
import qs from 'qs'

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

const ClassSelectionPanelItem = props => {
  const {
    program,
    secondaryDataPanelHandler,
    renderOverlayHandler,
    selectedClassHandler,
    currentUser,
    renderPaymentHandler,
    selectedClass
  } = props

  const [focused, focusedHandler] = useState(false)

  // ?? hook up axios here to book appointment

  const handleBooking = async () => {
    renderOverlayHandler(true)
    renderPaymentHandler(true)
  }

  const handleSelectedClass = (e) => {
    selectedClassHandler(e.target.id  * 1)
    focusedHandler(true)
  }

  return (
    <li
      key={program.id}
      onClick={handleSelectedClass}
      id={program.id}
      className={`ClassSelectionPanel__listItem`}
    >
      <div className="ClassSelectionPanel__listInfo"
        id={program.id}
      >
        <span className='ClassSelectionPanel__listItem--time'>{program.start_time}:00</span>
        <span className='ClassSelectionPanel__listItem--name'>{program.name}</span>
        {/* <span className='ClassSelectionPanel__listItem--book'>{program.spotsavailable}</span> */}
        <span className='ClassSelectionPanel__listItem--difficulty'>{program.difficulty}</span>
        <span 
          className='ClassSelectionPanel__listItem--book' 
          onClick={handleBooking}
        >
          <div className="ClassSelectionPanel--button">BOOK</div>
        </span>
      </div>
    </li>

  )
}

export default ClassSelectionPanelItem
