import React, { useState } from 'react'

// import H2W4 from '../../components/boxes/H2W4/H2W4'
import NamaslayPanel from '../../components/panels/NamaslayPanel/NamaslayPanel'
import ImagePanelBig from '../../components/panels/ImagePanelBig/ImagePanelBig'
import LoginPanel from '../../components/panels/LoginPanel/LoginPanel'
import Nav from '../../components/Nav/Nav'



import './Landing.scss';
import PersonLogo from '../../components/logos/PersonLogo/PersonLoop'

const Landing = props => {

  const {
    handleShowLanding,
    handleShowNav,
    handleShowPunchCard,
    handleShowSchedule,
    handleShowUserProfile,
    handleShowUserDataDash,
    currentUserHandler,
    navState,
    showLoggedIn,
    showLoggedInHandler,
    currentUser
  } = props;

  const [showLoginPanel, showLoginPanelhandler] = useState(false)

  const handleShowLoginPanel = () => {
    showLoginPanelhandler(!showLoginPanel)
  }

  return (
    <div className="Landing">
      <Nav
        navState={navState}
        handleShowLanding={handleShowLanding}
        handleShowPunchCard={handleShowPunchCard}
        handleShowNav={handleShowNav}
        handleShowSchedule={handleShowSchedule}
        handleShowUserProfile={handleShowUserProfile}
        handleShowUserDataDash={handleShowUserDataDash}
      />
      <NamaslayPanel
        panelSize={navState ? 'small' : 'large'}
        turnedClass="1"
        showLoginPanelhandler={showLoginPanelhandler}
        handleShowLoginPanel={handleShowLoginPanel}
        showLoggedIn={showLoggedIn}
      />
      <div className="Landing__tr">
        <ImagePanelBig
          size="50"
          url={'https://s3.amazonaws.com/heisey.namaslay/raw/landscape/balance-rocks.jpeg'}
        />
      </div>
      <div className="Landing__bl">
        <ImagePanelBig
          size="50"
          url='https://s3.amazonaws.com/heisey.namaslay/raw/landscape/foggy-shallows.jpeg'
        />
      </div>
      <div className="Landing__br">
        {showLoggedIn && (
          <div className="Landing__welcome">
            <h3>Welcome</h3>
            <span>Peaceful</span>
            <span>{currentUser.first_name || 'someone'}</span>
          </div>
        )}
        {(!showLoggedIn && !showLoginPanel) && (<div className="Landing__breathe">
          <span>
            Just
          </span>
          <span>
            Breathe
          </span>
        </div>)}
        <div className="Landing__logos">
          <div className={`Landing__logo ${showLoginPanel ? 'Landing__logo--menuOne' : 'Landing__logo--one'}`}>
            <PersonLogo />
          </div>
          <div className={`Landing__logo ${showLoginPanel ? 'Landing__logo--menuTwo' : 'Landing__logo--two'}`}>
            <PersonLogo />
          </div>
        </div>
          
        <LoginPanel
          showPanel={showLoginPanel}
          currentUserHandler={currentUserHandler}
          onSchedule={false}
          showLoggedInHandler={showLoggedInHandler}
        />
      </div>
    </div>
  )
}


export default Landing;
