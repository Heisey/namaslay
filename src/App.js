import React, { useState } from 'react';

import Landing from './pages/Landing/Landing'
import PunchCard from './pages/PunchCard/PunchCard'
import Schedule from './pages/Schedule/Schedule'
import UserProfile from './pages/UserProfile/UserProfile'

function App() {
  const [showLanding, showLandingHandler] = useState(false)
  const [showNav, showNavHandler] = useState(false)
  const [showPunchCard, showPunchCardHandler] = useState(true)
  const [showSchedule, showScheduleHandler] = useState(false)
  const [showUserProfile, showUserProfileHandler] = useState(false)

  const handleShowLanding = () => {
    showNavHandler(false)
    showLandingHandler(true)
    showPunchCardHandler(false)
    showScheduleHandler(false)
    showUserProfileHandler(false)
  }

  const handleShowPunchCard = () => {
    showNavHandler(false)
    showLandingHandler(false)
    showPunchCardHandler(true)
    showScheduleHandler(false)
    showUserProfileHandler(false)
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
  }

  const handleShowUserProfile = () => {
    showNavHandler(false)
    showLandingHandler(false)
    showPunchCardHandler(false)
    showScheduleHandler(false)
    showUserProfileHandler(true)
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
          navState={showNav}
        />
      )}
      {showPunchCard && (
        <PunchCard
          handleShowLanding={handleShowLanding}
          handleShowNav={handleShowNav}
          handleShowPunchCard={handleShowPunchCard}
          handleShowSchedule={handleShowSchedule}
          handleShowUserProfile={handleShowUserProfile}
          navState={showNav}
        />
      )}
      {showSchedule && (
        <Schedule
          handleShowLanding={handleShowLanding}
          handleShowNav={handleShowNav}
          handleShowPunchCard={handleShowPunchCard}
          handleShowSchedule={handleShowSchedule}
          handleShowUserProfile={handleShowUserProfile}
          navState={showNav}
        />
      )}
      {showUserProfile && (
        <UserProfile
          handleShowLanding={handleShowLanding}
          handleShowNav={handleShowNav}
          handleShowPunchCard={handleShowPunchCard}
          handleShowSchedule={handleShowSchedule}
          handleShowUserProfile={handleShowUserProfile}
          navState={showNav}
        />
      )}
    </div>
  );
}

export default App;
