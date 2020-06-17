import React, { useState } from 'react'

const ClassSelectionPanelItem = props => {
  const {
    program,
    secondaryDataPanelHandler,
    renderOverlayHandler,
    selectedClassHandler,
    currentUser,
    renderPaymentHandler,
    selectedClass,
    bookingInfoHandler,
    classesForDay
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
    const classInfo = classesForDay.filter(curClass => curClass.id === e.target.id * 1)
    console.log(classInfo)
    secondaryDataPanelHandler({
      title: classInfo[0].name, 
      info: '', 
      difficulty: classInfo[0].difficulty,
      start_time: classInfo[0].start_time,
      teacher_id: classInfo[0].teacher_id,
      day_id: classInfo[0].day_id,
      discipline_id: classInfo[0].discipline_id
    })
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
