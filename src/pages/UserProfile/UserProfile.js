import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
    navState,
    currentUser
  } = props;

  const [breathInterval, setBreathInterval] = useState(4000)
  const [reRenderer, setReRenderer] = useState(true)
  const [classSessions, setClassSessions] = useState()
  const [passCount, setPassCount] = useState()
  const [passes, setPasses] = useState()
  const [nextClass, setNextClass] = useState()

  const handleBreathInterval = (input) => {
    setBreathInterval(input * 1000)
  }

  useEffect(() => {
    setReRenderer(!reRenderer)
  }, [breathInterval])

  const getTodayID = () => {
    const today = new Date(Date.now())
    return today.getDate()
  }

  useEffect(() => {
    const getUserData = async () => {
      try {
        if (currentUser) {
          const today = getTodayID()
          let response = await axios.get(`/students/${currentUser.id}`)
          setClassSessions(response.data.classSessions)
          setPassCount(response.data.passCount)
          setPasses(response.data.passes)
          setNextClass(response.data.classSessions.find(c => c.daynumber > today))


        }
      }
      catch (e) {
        throw e
      }
    }
    getUserData()

  }, [])



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
      {nextClass && <div className="UserProfile__nextClass">
        <span className="UserProfile__nextClass--title">
          NEXT CLASS
        </span>
        <span className="UserProfile__nextClass--time">
          {nextClass.start_time}:00
          June {nextClass.daynumber}
        </span>
        <span className="UserProfile__nextClass--class">
          {nextClass.name}
        </span>
        <span className="UserProfile__nextClass--teacher">
          {nextClass.teacher}
        </span>

      </div>}
      <div className="UserProfile__AccountSettings">
        <i class="fas fa-cogs"></i>
      </div>
      <div className="UserProfile__SubscriptionDetails">
        <PassesPanel
          passes={passes}
          passCount={passCount}
        /></div>
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
