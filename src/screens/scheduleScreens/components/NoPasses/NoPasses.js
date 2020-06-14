import React from 'react';

export default function NoPasses(props) {

  const { buySinglePassHandler, noPassesLeftHandler, handleShowPunchCard } = props

  const handleBuySinglePass = () => {
    noPassesLeftHandler(false)
    buySinglePassHandler(true)
  }

  const changePage = () => {
    handleShowPunchCard()
  }

  return (
    <div className="NoPasses">
      <p>Sorry you dont have any classes</p>
      <p>Would you like to buy a class</p>
      <button
        onClick={handleBuySinglePass}
      >
        buy class
      </button>
      <p>Would you like to by a pass</p>
      <button
        onClick={changePage}
      >
        but Pass
      </button>
    </div>
  )
}