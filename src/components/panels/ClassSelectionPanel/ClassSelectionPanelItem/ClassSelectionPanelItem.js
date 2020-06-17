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
    selectedClass,
    bookingInfoHandler
  } = props

  const [focused, focusedHandler] = useState(false)
  const [isBooked, setIsBooked] = useState(false)

  const handleBooking = async (e) => {
    selectedClassHandler(e.target.id * 1)
    focusedHandler(true)
    renderOverlayHandler(true)
    renderPaymentHandler(true)
    //this needs to move out of here and into the overlay
    setIsBooked(true)
  }
  const handleCancelBooking = async () => {
    renderOverlayHandler(true)
    //this needs to move out of here and into the overlay
    // setIsBooked(false)
  }

  const handleSelectedClass = (e) => {
    console.log(e.target.id)
  }

  return (
    <li
      key={program.id}
      onClick={handleSelectedClass}
      id={program.id}
      className={`ClassSelectionPanel__listItem`}
    >
      <div className="ClassSelectionPanel__listInfo"
      >
        <span className='ClassSelectionPanel__listItem--time'>{program.start_time}:00</span>
        <span className='ClassSelectionPanel__listItem--name'>{program.name}</span>
        {/* <span className='ClassSelectionPanel__listItem--book'>{program.spotsavailable}</span> */}
        <span className='ClassSelectionPanel__listItem--difficulty'>{program.difficulty}</span>
        {!isBooked &&
          <span
            className='ClassSelectionPanel__listItem--book'
            onClick={handleBooking}
          >
            <div
              id={program.id} 
              className="ClassSelectionPanel--button"
            >BOOK</div>
          </span>
        }
        {isBooked &&
          <span
            className='ClassSelectionPanel__listItem--book'
            onClick={handleCancelBooking}
          >
            <div className="ClassSelectionPanel--button">CANCEL</div>
          </span>
        }

      </div>
    </li>

  )
}

export default ClassSelectionPanelItem
