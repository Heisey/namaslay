import React, { useState } from 'react';

import Landing from './pages/Landing/Landing'
import PunchCard from './pages/PunchCard/PunchCard'
import Schedule from './pages/Schedule/Schedule'
import UserProfile from './pages/UserProfile/UserProfile'
import UserDataDash from './pages/UserDataDash/UserDataDash'

function App() {
  const [showLanding, showLandingHandler] = useState(true)
  const [showNav, showNavHandler] = useState(false)
  const [showPunchCard, showPunchCardHandler] = useState(false)
  const [showSchedule, showScheduleHandler] = useState(false)
  const [showUserProfile, showUserProfileHandler] = useState(false)
  const [showUserDataDash, showUserDataDashHandler] = useState(false)
  const [currentUser, currentUserHandler] = useState(null)

  const handleShowLanding = () => {
    showNavHandler(false)
    showLandingHandler(true)
    showPunchCardHandler(false)
    showScheduleHandler(false)
    showUserProfileHandler(false)
    showUserDataDashHandler(false)
  }

  const handleShowPunchCard = () => {
    showNavHandler(false)
    showLandingHandler(false)
    showPunchCardHandler(true)
    showScheduleHandler(false)
    showUserProfileHandler(false)
    showUserDataDashHandler(false)
  }

  const handleShowNav = () => {
    showNavHandler(!showNav)
  }

  const handleShowSchedule = () => {
    showNavHandler(false)
    showLandingHandler(false)
    showPunchCardHandler(false)
    showScheduleHandler(true)
    showUserProfileHandler(false)
    showUserDataDashHandler(false)
  }

  const handleShowUserProfile = () => {
    showNavHandler(false)
    showLandingHandler(false)
    showPunchCardHandler(false)
    showScheduleHandler(false)
    showUserProfileHandler(true)
    showUserDataDashHandler(false)
  }

  const handleShowUserDataDash = () => {
    showNavHandler(false)
    showLandingHandler(false)
    showPunchCardHandler(false)
    showScheduleHandler(false)
    showUserProfileHandler(false)
    showUserDataDashHandler(true)
  }

  return (
    <div className="App">
      {showLanding && (
        <Landing
          handleShowLanding={handleShowLanding}
          handleShowNav={handleShowNav}
          handleShowPunchCard={handleShowPunchCard}
          handleShowSchedule={handleShowSchedule}
          handleShowUserProfile={handleShowUserProfile}
          handleShowUserDataDash={handleShowUserDataDash}
          navState={showNav}
          currentUserHandler={currentUserHandler}
        />
      )}
      {showPunchCard && (
        <PunchCard
          handleShowLanding={handleShowLanding}
          handleShowNav={handleShowNav}
          handleShowPunchCard={handleShowPunchCard}
          handleShowSchedule={handleShowSchedule}
          handleShowUserProfile={handleShowUserProfile}
          handleShowUserDataDash={handleShowUserDataDash}
          navState={showNav}
          currentUser={currentUser}
        />
      )}
      {showSchedule && (
        <Schedule
          handleShowLanding={handleShowLanding}
          handleShowNav={handleShowNav}
          handleShowPunchCard={handleShowPunchCard}
          handleShowSchedule={handleShowSchedule}
          handleShowUserProfile={handleShowUserProfile}
          handleShowUserDataDash={handleShowUserDataDash}
          navState={showNav}
          currentUser={currentUser}
        />
      )}
      {showUserProfile && (
        <UserProfile
          handleShowLanding={handleShowLanding}
          handleShowNav={handleShowNav}
          handleShowPunchCard={handleShowPunchCard}
          handleShowSchedule={handleShowSchedule}
          handleShowUserProfile={handleShowUserProfile}
          handleShowUserDataDash={handleShowUserDataDash}
          navState={showNav}
        />
      )}
      {showUserDataDash && (
        <UserDataDash
          handleShowLanding={handleShowLanding}
          handleShowNav={handleShowNav}
          handleShowPunchCard={handleShowPunchCard}
          handleShowSchedule={handleShowSchedule}
          handleShowUserProfile={handleShowUserProfile}
          handleShowUserDataDash={handleShowUserDataDash}
          navState={showNav}
        />
      )}
    </div>
  );
}

export default App;
