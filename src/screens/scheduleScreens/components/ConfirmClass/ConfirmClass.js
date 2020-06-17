import React from 'react'
import axios from 'axios'
import qs from 'qs'

import SnakeBprderButton from '../../../../components/Buttons/SnakeBorderButton/SnakeBorderButton'

import './ConfirmClass.scss'

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
export default function ConfirmClass(props) {

  const {
    secondaryDataPanel,
    renderOverlayHandler,
    currentUserHandler,
    currentUser,
    selectedClass
  } = props

  const handleBookingClass = async () => {
    try {
      console.log(selectedClass);

      const requestBody = { class_id: selectedClass, student_id: currentUser.id }
      let response = await axios.post(`/classes/${selectedClass}/book`, qs.stringify(requestBody), config)
      console.log(response.data);

      currentUserHandler({ ...currentUser, passCount: response.data.passCount })
      renderOverlayHandler(false)

    }
    catch (e) {
      throw e
    }


  }

  return (
    <div className='ConfirmClass'>
      <span className='ConfirmClass__title'>
        {secondaryDataPanel.title}
      </span>
      <span className='ConfirmClass__difficulty'>
        {secondaryDataPanel.difficulty}
      </span>
      <span className='ConfirmClass__day'>
        {secondaryDataPanel.day_id}
      </span>
      <span className='ConfirmClass__time'>
        {secondaryDataPanel.start_time}
      </span>
      <div className='ConfirmClass__button'>
        <SnakeBprderButton
          text="CONFIRM"
          clickHandler={handleBookingClass}
        />
      </div>
    </div>
  )
}
