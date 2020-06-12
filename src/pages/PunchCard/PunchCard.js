import React from 'react';

import Nav from '../../components/Nav/Nav'

import './PunchCard.scss';

const PunchCard = props => {
  const {
    handleShowLanding,
    handleShowNav,
    handleShowPunchCard,
    handleShowSchedule,
    handleShowUserProfile,
    navState
  } = props

  return (
    <div className="PunchCard">
      <Nav
        handleShowLanding={handleShowLanding}
        handleShowNav={handleShowNav}
        handleShowPunchCard={handleShowPunchCard}
        handleShowSchedule={handleShowSchedule}
        handleShowUserProfile={handleShowUserProfile}
        navState={navState}
      />
      <div className="PunchCard__namaslay">namaslay</div>
      <div className="PunchCard__image--small">image small</div>
      <div className="PunchCard__image--bigOne">image big</div>
      <div className="PunchCard__image--bigTwo">image big</div>
      <div className="PunchCard__card">Card</div>
      <div className="PunchCard__singleClass">One</div>
      <div className="PunchCard__fiveClasses">Five</div>
      <div className="PunchCard__twentyFiveClasses">twenty five</div>
      <div className="PunchCard__monthUnlimited">month unlimited</div>
    </div>
  )
}

export default PunchCard
