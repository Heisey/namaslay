import React from 'react'

// import H2W4 from '../../components/boxes/H2W4/H2W4'
import NamaslayPanel from '../../components/panels/NamaslayPanel/NamaslayPanel'
import ImagePanelBig from '../../components/panels/ImagePanelBig/ImagePanelBig'
import Nav from '../../components/Nav/Nav'



import './Landing.scss';

const Landing = props => {

  const {
    handleShowLanding,
    handleShowNav,
    handleShowPunchCard,
    handleShowSchedule,
    handleShowUserProfile,
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
        handleShowUserProfile={handleShowUserProfile}
      />
      <NamaslayPanel
        panelSize={navState ? 'small' : 'large'}
        turnedClass="1"
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
      <div className="Landing__br"></div>
    </div>
  )
}


export default Landing;
