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
    classesForDay,
    scheduleData
  } = props

  const [focused, focusedHandler] = useState(false)
  const [isBooked, setIsBooked] = useState(false)

  const handleBooking = async (e) => {
    selectedClassHandler(e.target.id * 1)
    focusedHandler(true)
    renderOverlayHandler(true)
    if (currentUser !== null) {
      if (currentUser.passCount <= 0) {
        renderPaymentHandler(true)
      }
    } else {
      renderPaymentHandler(false)
    }
    
    //this needs to move out of here and into the overlay
    setIsBooked(true)
    const classInfo = classesForDay.filter(curClass => curClass.id === e.target.id * 1)
  
    const teacherInfo = scheduleData.teachers.filter(curTeacher => curTeacher.id === classInfo[0].teacher_id)
    
    secondaryDataPanelHandler({
      title: classInfo[0].name, 
      info: '', 
      difficulty: classInfo[0].difficulty,
      start_time: classInfo[0].start_time,
      teacher_id: teacherInfo[0].name,
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
