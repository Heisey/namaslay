import React from 'react';


import './Nav.scss'
import TeacherBox from '../boxes/navBoxes/TeacherBox/TeacherBox'
import ClassesBox from '../boxes/navBoxes/ClassesBox/ClassesBox'
import StoriesBox from '../boxes/navBoxes/StoriesBox/StoriesBox'
import HomeBox from '../boxes/navBoxes/HomeBox/HomeBox'
import ScheduleBox from '../boxes/navBoxes/ScheduleBox/ScheduleBox'
import PunchCardBox from '../boxes/navBoxes/PunchCardBox/PunchCardBox'
import LogoutBox from '../boxes/navBoxes/LogoutBox/LogoutBox';
import UserDataDashBox from '../boxes/navBoxes/UserDataDashBox/UserDataDashBox';
import ThreeBox from '../boxes/navBoxes/ThreeBox/ThreeBox'
import UserProfileBox from '../boxes/navBoxes/UserProfileBox/UserProfileBox'

const Nav = props => {
  const {
    navState,
    handleShowLanding,
    handleShowNav,
    handleShowPunchCard,
    handleShowSchedule,
    handleShowUserProfile,
    handleShowUserDataDash
  } = props


  const handleToggle = () => {
    handleShowNav()
  }

  const goToHome = () => {
    handleShowLanding()
  }

  const goToPunchCard = () => {
    handleShowPunchCard()
  }

  const goToSchedule = () => {
    handleShowSchedule()
  }

  const goToUserProfile = () => {
    console.log('hello')
    handleShowUserProfile()
  }

  const goToUserDataDash = () => {
    console.log('hello')
    handleShowUserDataDash()
  }

  return (
    <div
      className={`Nav Nav--${navState ? 'large' : 'small'}`}
    >
      <div
        className={`Nav__Home ${!navState && "hidden"}`}
        onClick={goToHome}
      >
        <HomeBox navState={navState} />
      </div>
      <div className={`Nav__teachers ${!navState && "hidden"}`}>
        <TeacherBox navState={navState} />
      </div>
      <div className={`Nav__classes ${!navState && "hidden"}`}>
        <ClassesBox
          navState={navState}
        />
      </div>
      <div className={`Nav__stories ${!navState && "hidden"}`}>
        <StoriesBox navState={navState} />
      </div>
      <div
        className={`Nav__punchCard C`}
        onClick={goToPunchCard}
      >
        <PunchCardBox navState={navState} />
      </div>
      <div
        className={`Nav__schedule ${!navState && "hidden"}`}
        onClick={goToSchedule}
      >
        <ScheduleBox
          navState={navState}
        />
      </div>

      <div
        className={`Nav__userProfile ${!navState && "hidden"}`}
        onClick={goToUserProfile}
      >
        <UserProfileBox
          navState={navState}
        />
      </div>

      <div className={`Nav__logout ${!navState && "hidden"}`}>
        <LogoutBox
          navState={navState}
        />
      </div>
      <div className={`Nav__dashboard ${!navState && "hidden"}`}
        onClick={goToUserDataDash}>
        <UserDataDashBox
          navState={navState}
        />
      </div>
      <div className={`Nav__three ${!navState && "hidden"}`}>
        <ThreeBox
          navState={navState}
        />
      </div>



      <div
        className="Nav__button"
        onClick={handleToggle}
      >

        {/* // ?? Closed Nav Menu */}
        <div className={`Nav__button--icon ${navState && 'Nav__button--open'}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* // ?? Opened Nav Menu */}
        {/* {navState && <div className="Nav__button--close">
          <span>x</span>
        </div>} */}
      </div>
    </div>
  )
}

export default Nav;
