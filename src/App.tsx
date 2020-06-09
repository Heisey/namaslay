import React, {useState} from 'react';

import Landing from './pages/Landing/Landing'
import PunchCard from './pages/PunchCard/PunchCard'
import Schedule from './pages/Schedule/Schedule'
import UserProfile from './pages/UserProfile/UserProfile'

function App() {
  const [showLanding, showLandingHandler] = useState<boolean>(true)
  const [showNav, showNavHandler] = useState<boolean>(false)
  const [showPunchCard, showPunchCardHandler] = useState<boolean>(false)
  const [showSchedule, showScheduleHandler] = useState<boolean>(false)
  const [showUserProfile, showUserProfileHandler] = useState<boolean>(false)
    
  const handleShowLanding = () => {
    showLandingHandler(true)
    showPunchCardHandler(false)

  }

  const handleShowPunchCard = () => {
    showLandingHandler(false)
    showPunchCardHandler(true)
  }

  const handleShowNav = () => {
    showNavHandler(!showNav)
  }

  const handleShowSchedule = () => {
    showLandingHandler(false)
    showPunchCardHandler(true)
  }

  return (
    <div className="App">
      {showLanding && (
        <Landing
          handleShowLanding={handleShowLanding} 
          handleShowNav={handleShowNav}
          handleShowPunchCard={handleShowPunchCard}
          navState={showNav}
        />
      )}
      {showPunchCard && (
        <PunchCard 
          handleShowLanding={handleShowLanding} 
          handleShowNav={handleShowNav}
          handleShowPunchCard={handleShowPunchCard}
          navState={showNav}
        />
      )}
      {showSchedule && (
      <Schedule 
          handleShowLanding={handleShowLanding} 
          handleShowNav={handleShowNav}
          handleShowPunchCard={handleShowPunchCard}
          navState={showNav}
        />
      )}
      {showUserProfile && (
        <UserProfile 
          handleShowLanding={handleShowLanding} 
          handleShowNav={handleShowNav}
          handleShowPunchCard={handleShowPunchCard}
          navState={showNav}
        />
      )}
    </div>
  );
}

export default App;
