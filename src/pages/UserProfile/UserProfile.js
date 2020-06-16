import React, { useState, useEffect } from 'react'

// ?? Components
import Nav from '../../components/Nav/Nav';
import NamaslayPanel from '../../components/panels/NamaslayPanel/NamaslayPanel'
import NotificationsPanel from '../../components/panels/NotificationsPanel/NotificationsPanel'
import UserDataPanel from '../../components/panels/UserDataPanel/UserDataPanel'
import PassesPanel from '../../components/panels/PassesPanel/PassesPanel'
import BreathePanel from '../../components/panels/BreathePanel/BreathePanel'

import './UserProfile.scss';

const UserProfile = props => {

  const {
    handleShowLanding,
    handleShowNav,
    handleShowPunchCard,
    handleShowSchedule,
    handleShowUserProfile,
    handleShowUserDataDash,
    navState
  } = props;

  const [breathInterval, setBreathInterval] = useState(4000)
  const [reRenderer, setReRenderer] = useState(true)

  const handleBreathInterval = (input) => {
    setBreathInterval(input * 1000)
  }

  useEffect(() => {
    setReRenderer(!reRenderer)
  }, [breathInterval])



  return (
    <div className="UserProfile">
      <Nav
        navState={navState}
        handleShowLanding={handleShowLanding}
        handleShowPunchCard={handleShowPunchCard}
        handleShowNav={handleShowNav}
        handleShowSchedule={handleShowSchedule}
        handleShowUserProfile={handleShowUserProfile}
      />
      <div className="UserProfile__Namaslay">
        <NamaslayPanel
          panelSize={'small'}
        /></div>
      <div className="UserProfile__nextClass">
        <span className="UserProfile__nextClass--title">
          NEXT CLASS
        </span>
        <span className="UserProfile__nextClass--time">
          12pm Tues Jun 11
        </span>
        <span className="UserProfile__nextClass--class">
          Lukewarm Hatha
        </span>
        <span className="UserProfile__nextClass--teacher">
          Boba Fett
        </span>

      </div>
      <div className="UserProfile__AccountSettings">
        <i class="fas fa-cogs"></i>
      </div>
      <div className="UserProfile__SubscriptionDetails"><PassesPanel /></div>
      <div className="UserProfile__ClassHistory">
        <span>Class</span>
        <i class="fas fa-history"></i>
        <span>History</span>
      </div>
      <div className="UserProfile__BrowseReviews">
        <span>Browse</span>
        <i class="fas fa-bahai"></i>
        <span>Reviews</span>
      </div>
      <div className="UserProfile__Breathe">
        {reRenderer &&
          <BreathePanel
            breathInterval={breathInterval}
            handleBreathInterval={handleBreathInterval}
          />
        }
        {!reRenderer &&
          <BreathePanel
            breathInterval={breathInterval}
            handleBreathInterval={handleBreathInterval}
          />
        }

      </div>
      <div className="UserProfile__Data">
        <UserDataPanel
          handleShowUserDataDash={handleShowUserDataDash}
        />
      </div>
      <div className="UserProfile__ViewPanel">ViewPanel</div>
      <div className="UserProfile__Notifications">
        <NotificationsPanel
        /></div>
    </div>
  )

}

export default UserProfile
