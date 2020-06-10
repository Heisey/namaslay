import React from 'react';

import { motion } from "framer-motion"

import './Nav.scss'
import TeacherBox from '../boxes/navBoxes/TeacherBox/TeacherBox'
import ClassesBox from '../boxes/navBoxes/ClassesBox/ClassesBox'
import StoriesBox from '../boxes/navBoxes/StoriesBox/StoriesBox'
import HomeBox from '../boxes/navBoxes/HomeBox/HomeBox'
import ScheduleBox from '../boxes/navBoxes/ScheduleBox/ScheduleBox'
import PunchCardBox from '../boxes/navBoxes/PunchCardBox/PunchCardBox'
import OneBox from '../boxes/navBoxes/OneBox/OneBox';
import TwoBox from '../boxes/navBoxes/TwoBox/TwoBox';
import ThreeBox from '../boxes/navBoxes/ThreeBox/ThreeBox'
import UserProfileBox from '../boxes/navBoxes/UserProfileBox/UserProfileBox'

interface NavProps {
  handleShowLanding: () => void,
  handleShowPunchCard: () => void,
  handleShowNav: () => void,
  handleShowSchedule: () => void,
  handleShowUserProfile: () => void,
  navState: boolean
}

const Nav: React.FC<NavProps> = props => {
  const { 
    navState, 
    handleShowLanding, 
    handleShowNav,
    handleShowPunchCard,
    handleShowSchedule,
    handleShowUserProfile,
  } = props

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

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

  return (
    <div
      className={`Nav Nav--${navState ? 'large' : 'small'}`}
    >
      {/* <div 
        className={`Nav__Home Nav--${navState ? "show": "hidden"}`}
        onClick={goToHome}
      >
        <HomeBox navState={navState} />
      </div> */}
      {/* <div className={`Nav__teachers ${!navState && "hidden"}`}>
        <TeacherBox />
      </div>
      <div className={`Nav__classes ${!navState && "hidden"}`}>
        <ClassesBox />
      </div>
      <div className={`Nav__stories ${!navState && "hidden"}`}>
        <StoriesBox />
      </div>
      <div 
        className={`Nav__punchCard ${!navState && "hidden"}`}
        onClick={goToPunchCard}
      >
        <PunchCardBox />
      </div> */}
      <motion.div 
        animate={{ x: 2 }}
        initial={false}
        // initial="hidden"
        // animate="visible"
        variants={variants}
        className={`Nav__schedule ${!navState && "hidden"}`}
        onClick={goToSchedule}
      >
        <ScheduleBox 
          navState={navState}
        />
      </motion.div>

      {/* <div 
        className={`Nav__userProfile ${!navState && "hidden"}`}
        onClick={goToUserProfile}
      >
        <UserProfileBox />
      </div>
      
      <div className={`Nav__one ${!navState && "hidden"}`}>
        <OneBox />
      </div>
      <div className={`Nav__two ${!navState && "hidden"}`}>
        <TwoBox />
      </div>
      <div className={`Nav__three ${!navState && "hidden"}`}>
        <ThreeBox />
      </div> */}
      
      

      <div
        className="Nav__button"
        onClick={handleToggle}
      >

        {/* // ?? Closed Nav Menu */}
        {!navState && <div className="Nav__button--open">
          <span>---</span>
          <span>---</span>
          <span>---</span>
        </div>}

        {/* // ?? Opened Nav Menu */}
        {navState && <div className="Nav__button--close">
          <span>x</span>
        </div>}
      </div>
    </div>
  )
}

export default Nav;
