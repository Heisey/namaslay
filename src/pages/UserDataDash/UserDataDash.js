import React from 'react'

// ?? Components
import Nav from '../../components/Nav/Nav';
import NamaslayPanel from '../../components/panels/NamaslayPanel/NamaslayPanel'
import ChartPanel from '../../components/panels/UserDataPanel/ChartPanel/ChartPanel'
import { totalClassesAttendedByMonth } from '../../dev_data/userData/data'

import './UserDataDash.scss';

const UserDataDash = props => {

  const {
    handleShowLanding,
    handleShowNav,
    handleShowPunchCard,
    handleShowSchedule,
    handleShowUserProfile,
    handleShowUserDataDash,
    navState
  } = props;

  return (
    <div className="UserDataDash">
      <Nav
        navState={navState}
        handleShowLanding={handleShowLanding}
        handleShowPunchCard={handleShowPunchCard}
        handleShowNav={handleShowNav}
        handleShowSchedule={handleShowSchedule}
        handleShowUserProfile={handleShowUserProfile}
        handleShowUserDataDash={handleShowUserDataDash}
      />
      <div className="UserDataDash__Namaslay">
        <NamaslayPanel
          panelSize={'small'}
        /></div>
      <div className="UserDataDash__Box1">Box1</div>
      <div className="UserDataDash__ChartPanel1"><ChartPanel
        height={totalClassesAttendedByMonth.height}
        width={totalClassesAttendedByMonth.width}
        data={totalClassesAttendedByMonth.data}
        options={totalClassesAttendedByMonth.options}
      /></div>
      <div className="UserDataDash__Breathe">BREATHE</div>
      <div className="UserDataDash__Box3">Box3</div>
      <div className="UserDataDash__ChartPanel2"><ChartPanel /></div>
      <div className="UserDataDash__Box5">Box5</div>

    </div>
  )

}

export default UserDataDash
