import React from 'react'

import SnakeBprderButton from '../../../../components/Buttons/SnakeBorderButton/SnakeBorderButton'

import './ConfirmClass.scss'

export default function ConfirmClass(props) {

  const { 
    secondaryDataPanel,
    renderOverlayHandler,
    currentUserHandler,
    currentUser
  } = props

  const handleBookingClass = () => {
    renderOverlayHandler(false)
    currentUserHandler({...currentUser, passCount: currentUser.passCount - 1})
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