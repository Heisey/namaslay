import React from 'react'

import PaymentPanel from '../../components/panels/PaymentPanel/PaymentPanel';
import LoginPanel from '../../components/panels/LoginPanel/LoginPanel';

import './ScheduleScreens.scss'

export default function ScheduleScreens(props) {

  const { currentUser, currentUserHandler } = props

  return (
    <div className="ScheduleScreens">
      <div className="ScheduleScreens__card">
        {currentUser === null && (
          <LoginPanel 
            currentUserHandler={currentUserHandler}
            showPanel={true}
          />
        )}
        {currentUser !== null && <PaymentPanel />}
      </div>
    </div>
  )
}