import React from 'react'

import SnakeBprderButton from '../../../../components/Buttons/SnakeBorderButton/SnakeBorderButton'

import './ConfirmClass.scss'

export default function ConfirmClass(props) {

  const { secondaryDataPanel } = props

  return (
    <div className='ConfirmClass'>
      <span className='ConfirmClass__titile'>
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
        />
      </div>
    </div>
  )
}