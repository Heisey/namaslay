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

import Nav from '../../components/Nav/Nav'

import './PunchCard.scss';


const PunchCard = props => {


  const [passType, setPassType] = useState()
  const [passCount, setPassCount] = useState()
  const [price, priceHandler] = useState(0)

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
          size="16"
          url={'https://s3.amazonaws.com/heisey.namaslay/raw/landscape/balance-rocks.jpeg'}
        />
      </div>
      <div className="PunchCard__image--bigOne">
        <ImagePanelBig
          size="16"
          url={'https://s3.amazonaws.com/heisey.namaslay/raw/landscape/balance-rocks.jpeg'}
        />
      </div>
      <div className="PunchCard__image--bigTwo">
        <ImagePanelBig
          size="16"
          url='https://s3.amazonaws.com/heisey.namaslay/raw/landscape/foggy-shallows.jpeg'
        />
      </div>
      <div className="PunchCard__card">
        <PunchCardPanel
          type={passType}
          setPassCount={setPassCount}
          price={price}
          currentUserHandler={currentUserHandler}
          currentUser={currentUser}
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
          url='https://s3.amazonaws.com/heisey.namaslay/raw/landscape/foggy-shallows.jpeg'
        />
      </div>
      <div className="PunchCard__bottomImage">
        <ImagePanelHorizontal
          url='https://s3.amazonaws.com/heisey.namaslay/raw/landscape/foggy-shallows.jpeg'
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
