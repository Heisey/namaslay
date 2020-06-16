import React from 'react';

import './SnakeBorderButton.scss'

export default function SnakeBorderButton(props) {
  const { clickHandler, text } = props

  const handleClick = () => {
    clickHandler()
  }

  return (
    <div
      className="SnakeBorderButton"
      onClick={handleClick}
    >
      <span className="SnakeBorderButton--one"></span>
      <span className="SnakeBorderButton--two"></span>
      <span className="SnakeBorderButton--three"></span>
      <span className="SnakeBorderButton--four"></span>
      {text}
    </div>
  )
}
