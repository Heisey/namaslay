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

    // const requestBody = {
    //   class_id: `${selectedClass}`
    // }

    // axios.post(`/classes/${id}/book`, qs.stringify(requestBody), config)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   })
    

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
      className={`ClassSelectionPanel__listItem ClassSelectionPanel__listItem--${focused ? 'focused' : 'unfocused'}`}
    >
      <div className="ClassSelectionPanel__listInfo"
      id={program.id}>
        <span className='ClassSelectionPanel__listItem--time' id={program.id}>{program.start_time}:00</span>
        <span className='ClassSelectionPanel__listItem--name' id={program.id}>{program.name}</span>
        <span className='ClassSelectionPanel__listItem--spots' id={program.id}>{program.spotsavailable}</span>
        <span className='ClassSelectionPanel__listItem--difficulty' id={program.id}>{program.difficulty}</span>
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
