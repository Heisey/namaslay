import React, { useState, useEffect } from 'react'

import PaymentPanel from '../../components/panels/PaymentPanel/PaymentPanel';
import LoginPanel from '../../components/panels/LoginPanel/LoginPanel';
import NoPasses from './components/NoPasses/NoPasses';
import BookingClassInfo from './components/BookingClassInfo/BookingClassInfo';
import ConfirmClass from './components/ConfirmClass/ConfirmClass'

import './ScheduleScreens.scss'

export default function ScheduleScreens(props) {
  const [noPassesLeft, noPassesLeftHandler] = useState(false)
  const [buySinglePass, buySinglePassHandler] = useState(false)

  const [passCount, passCountHandler] = useState(0)
  const [overlayMenu, overlayMenuHandler] = useState(true)

  const {
    secondaryDataPanel,
    selectedClass,
    bookingInfo,
    currentUser,
    currentUserHandler,
    handleShowPunchCard,
    renderOverlayHandler,
    renderPayment
  } = props

  useEffect(() => {
    if (currentUser) {
      passCountHandler(currentUser.passCount)
      // overlayMenuHandler(true)
    }

    if (renderPayment) {
      noPassesLeftHandler(true)
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
            renderOverlayHandler={renderOverlayHandler}
          />
        )}
        {(currentUser && !noPassesLeft && bookingInfo !== null) && (

          <BookingClassInfo
            currentUser={currentUser}
            renderOverlayHandler={renderOverlayHandler}
          />
        )}

        {(currentUser !== null & noPassesLeft) && (
          <NoPasses
            buySinglePassHandler={buySinglePassHandler}
            noPassesLeftHandler={noPassesLeftHandler}
            handleShowPunchCard={handleShowPunchCard}
            overlayMenuHandler={overlayMenuHandler}
            renderOverlayHandler={renderOverlayHandler}
          />
        )}
        {(currentUser && !noPassesLeft && !buySinglePass) && (
          <ConfirmClass
            selectedClass={selectedClass}
            secondaryDataPanel={secondaryDataPanel}
            renderOverlayHandler={renderOverlayHandler}
            currentUserHandler={currentUserHandler}
            currentUser={currentUser}
            renderOverlayHandler={renderOverlayHandler}
          />
        )}
        {(currentUser !== null && buySinglePass && passCount === 0) && (
          <PaymentPanel
            passCountHandler={passCountHandler}
            userId={currentUser.id}
            selectedClass={selectedClass}
            renderOverlayHandler={renderOverlayHandler}
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
