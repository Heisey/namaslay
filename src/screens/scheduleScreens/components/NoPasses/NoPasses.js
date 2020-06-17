import React from 'react';

import SnakeBorderButton from '../../../../components/Buttons/SnakeBorderButton/SnakeBorderButton'

import './NoPasses.scss'

export default function NoPasses(props) {

  const { overlayMenuHandler, buySinglePassHandler, noPassesLeftHandler, handleShowPunchCard } = props

  const handleBuySinglePass = () => {
    noPassesLeftHandler(false)
    buySinglePassHandler(true)
    overlayMenuHandler(false)
  }

  const changePage = () => {
    handleShowPunchCard()
  }

  return (
    <div className="NoPasses">
      <p className="NoPasses__title">Sorry you dont have any classes</p>

      <p className='NoPasses__text--one'>Would you like to buy a class</p>

      <div className='NoPasses__button1'>
        <SnakeBorderButton
          text='Buy Class'
          clickHandler={handleBuySinglePass}
        />
      </div>

      <p className='NoPasses__text--two'>Would you like to by a pass</p>

      <div className='NoPasses__button2'>
        <SnakeBorderButton
          text='Buy a Pass'
          clickHandler={changePage}
        />
      </div>
      {/* <button
        onClick={handleBuySinglePass}
      >
        buy class
      </button> */}
      {/* <button
        onClick={changePage}
      >
        but Pass
      </button> */}
    </div>
  )
}
