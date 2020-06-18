import React from 'react';

import SnakeBorderButton from '../../components/Buttons/SnakeBorderButton/SnakeBorderButton'

import './PunchCardScreen.scss'

export default function PunchCardScreen(props) {

  const { showOverlayHandler } = props

  const closeOverlay = () => {
    showOverlayHandler(false)
  }

  return (
    <div className='PunchCardScreen'>
      <span className='PunchCardScreen__close'>
        <i 
          onClick={closeOverlay}
          class="fas fa-times"
        ></i>
      </span>
      <div className='PunchCardScreen__container'>
        <div className="PunchCardScreen__button">
          <SnakeBorderButton 
            clickHandler={closeOverlay}
            text='CLOSE'
          />
        </div>
      </div>
    </div>
  )
}