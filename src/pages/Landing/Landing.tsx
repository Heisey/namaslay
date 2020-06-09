import React, {useState} from 'react'

// import H2W4 from '../../components/boxes/H2W4/H2W4'
import NamaslayPanel from '../../components/panels/NamaslayPanel/NamaslayPanel'
import Nav from '../../components/Nav/Nav'

import './Landing.scss';

interface LandingProps {
  handleShowLanding: () => void,
  handleShowNav: () => void,
  handleShowPunchCard: () => void,
  handleShowSchedule: () => void,
  navState: boolean
}
const Landing: React.FC <LandingProps> = props => {

  const { 
    handleShowLanding,
    handleShowNav,
    handleShowPunchCard,
    handleShowSchedule,
    navState
  } = props;


  

  return (
    <div className="Landing">
      <Nav 
        navState={navState}
        handleShowLanding={handleShowLanding}
        handleShowPunchCard={handleShowPunchCard}
        handleShowNav={handleShowNav} 
        handleShowSchedule={handleShowSchedule}
      />
      <NamaslayPanel
        panelSize={navState ? 'small' : 'large'} 
      />
      <div className="Landing__tr"></div>
      <div className="Landing__bl"></div>
      <div className="Landing__br"></div>
    </div>
  )
}


export default Landing;
