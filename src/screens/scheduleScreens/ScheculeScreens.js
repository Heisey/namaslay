import React, { useState, useEffect } from 'react'

import PaymentPanel from '../../components/panels/PaymentPanel/PaymentPanel';
import LoginPanel from '../../components/panels/LoginPanel/LoginPanel';
import NoPasses from './components/NoPasses/NoPasses';
import BookingClassInfo from './components/BookingClassInfo/BookingClassInfo';

import './ScheduleScreens.scss'

export default function ScheduleScreens(props) {
  const [noPassesLeft, noPassesLeftHandler] = useState(false)
  const [buySinglePass, buySinglePassHandler] = useState(false)
  
  const [passCount, passCountHandler] = useState(0)
  const [overlayMenu, overlayMenuHandler] = useState(true)

  const { bookingInfo, currentUser, currentUserHandler, handleShowPunchCard } = props

  useEffect(() => {
    if (currentUser) {
      passCountHandler(currentUser.passCount)
      // overlayMenuHandler(true)
    }
  }, [])

  return (
    <div className="ScheduleScreens">
      <div className="ScheduleScreens__card">
        {currentUser === null && (
          <LoginPanel 
            currentUserHandler={currentUserHandler}
            showPanel={true}
            onSchedule={true}
            noPassesLeftHandler={noPassesLeftHandler}
            showLoggedInHandler={() => console.log('dummy func')}
          />
        )}
        {(currentUser & bookingInfo !== null) && (
          
          <BookingClassInfo 
            currentUser={currentUser}
          />
        )}
        {(currentUser !== null & noPassesLeft) && (
          <NoPasses 
            buySinglePassHandler={buySinglePassHandler}
            noPassesLeftHandler={noPassesLeftHandler}
            handleShowPunchCard={handleShowPunchCard}
            overlayMenuHandler={overlayMenuHandler}
          />
        )}
        {(currentUser !== null && buySinglePass) && (
          <PaymentPanel 
            passCountHandler={passCountHandler}
            userId={currentUser.id}
          />
        )}
        {/* {(currentUser !== null && !classInfo) && (
          <div className='ScheduleScreens__classInfo'>
            hello
          </div>
        )} */}
      </div>
    </div>
  )
}