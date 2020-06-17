import React from 'react'

import './BookingClassInfo.scss'

export default function BookingClassInfo(props) {

  const { currentUser } = props

  return (
    <div className="BookingClassInfo">
      <h3>{currentUser.first_name}</h3>
      <span>{currentUser.passCount}</span>
    </div>
  )
}