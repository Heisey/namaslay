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
        <span className="PunchCardScreen__title">
          Confirm your Purchase
        </span>
        <div className="PunchCardScreen__button">
          <SnakeBorderButton 
            clickHandler={closeOverlay}
            text='CONFIRM'
          />
        </div>
      </div>
    </div>
  )
}