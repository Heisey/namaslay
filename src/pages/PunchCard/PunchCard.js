import React, { useState, useEffect } from 'react';
import axios from 'axios'

import FiveClass from '../../components/boxes/punchCardBoxes/FiveClass/FiveClass'
import NamaslayPanel from '../../components/panels/NamaslayPanel/NamaslayPanel'
import OneClass from '../../components/boxes/punchCardBoxes/OneClass/OneClass'
import ImagePanelBig from '../../components/panels/ImagePanelBig/ImagePanelBig'
import ImagePanelHorizontal from '../../components/panels/ImagePanelHorizontal/ImagePanelHorizontal'
import PunchCardPanel from '../../components/panels/PunchCardPanel/PunchCardPanel'
import TwentyFiveClass from '../../components/boxes/punchCardBoxes/TwentyFiveClass/TwentyFiveClass'
import Unlimited from '../../components/boxes/punchCardBoxes/Unlimited/Unlimited'
import PersonLogo2 from '../../components/logos/PersonLogo2/PersonLoop2';
import PunchCardScreen from '../../screens/PunchCardScreen/PunchCardScreen'
import Nav from '../../components/Nav/Nav'

import './PunchCard.scss';


const PunchCard = props => {


  const [passType, setPassType] = useState()
  const [passCount, setPassCount] = useState()
  const [price, priceHandler] = useState(0)
  const [showOverlay, showOverlayHandler] = useState(false)

  const {
    handleShowLanding,
    handleShowNav,
    handleShowPunchCard,
    handleShowSchedule,
    handleShowUserProfile,
    handleShowUserDataDash,
    navState,
    currentUser,
    currentUserHandler
  } = props

  useEffect(() => {
    axios.get(`/students/1/passes`)
      .then((res) => {
        console.log(res.data);
        setPassCount(res.data.passCount);
      })
  }, [])

  const showSingleClasses = () => {
    setPassType('single')
  }

  const showFiveClasses = () => {
    setPassType('5-pack')
  }

  const showTwentyFiveClasses = () => {
    setPassType('25-pack')
  }

  const showUnlimited = () => {
    setPassType('monthly')
  }

  return (
    <div className="PunchCard">
      {showOverlay && (
        <PunchCardScreen 
          showOverlayHandler={showOverlayHandler}
        />
      )}
      <Nav
        handleShowLanding={handleShowLanding}
        handleShowNav={handleShowNav}
        handleShowPunchCard={handleShowPunchCard}
        handleShowSchedule={handleShowSchedule}
        handleShowUserProfile={handleShowUserProfile}
        handleShowUserDataDash={handleShowUserDataDash}
        navState={navState}
      />
      <div className="PunchCard__namaslay">
        <NamaslayPanel
          panelSize='small'
          turnedClass='2'
        />
      </div>
      <div className="PunchCard__image--small">
        <ImagePanelBig
          size="19"
          //heart
          url='https://images.unsplash.com/photo-1535615615570-3b839f4359be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        />
      </div>
      <div className="PunchCard__image--bigOne">
        <ImagePanelBig
          size="17"
          //buddha
          url='https://images.unsplash.com/photo-1538024333176-f25f63f873ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80'
        />
      </div>
      <div className="PunchCard__image--bigTwo">
        <ImagePanelBig
          size="16"
          // balancing rocks and sun
          url='https://images.unsplash.com/photo-1587711008785-3c3cbcdbddaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=677&q=80'
        //balancing rocks
        // url='https://images.unsplash.com/photo-1528800546314-a085ed1931e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        />
      </div>
      <div className="PunchCard__card">
        <PunchCardPanel
          type={passType}
          setPassCount={setPassCount}
          price={price}
          currentUserHandler={currentUserHandler}
          currentUser={currentUser}
          showOverlayHandler={showOverlayHandler}
        />
      </div>
      <div className="PunchCard__singleClass">
        <OneClass
          showSingleClasses={showSingleClasses}
          priceHandler={priceHandler}
        />
      </div>
      <div className="PunchCard__fiveClasses">
        <FiveClass
          showFiveClasses={showFiveClasses}
          priceHandler={priceHandler}
        />
      </div>
      <div className="PunchCard__twentyFiveClasses">
        <TwentyFiveClass
          showTwentyFiveClasses={showTwentyFiveClasses}
          priceHandler={priceHandler}
        />
      </div>
      <div className="PunchCard__monthUnlimited">
        <Unlimited
          showUnlimited={showUnlimited}
          priceHandler={priceHandler}
        />
      </div>
      <div className="PunchCard__topImage">
        <ImagePanelHorizontal
          //cherry blossom
          url='https://images.unsplash.com/photo-1553137686-316a8f052cce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
          size='2'
        />

      </div>
      <div className="PunchCard__bottomImage">

        <ImagePanelHorizontal
          //forest buddha
          url='https://images.unsplash.com/photo-1571039599810-ef84c452707f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
          size='2'
        />
      </div>

      <div className="PunchCard__sword1">
        <PersonLogo2 />
      </div>

      <div className="PunchCard__sword2">
        <PersonLogo2 />
      </div>
      <div className="PunchCard__sword3">
        <PersonLogo2 />
      </div>
      <div className="PunchCard__sword4">
        <PersonLogo2 />
      </div>
    </div>
  )
}

export default PunchCard
