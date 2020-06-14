import React, { useState, useEffect } from 'react'
import axios from 'axios'

// ?? Components
import Nav from '../../components/Nav/Nav';
import NamaslayPanel from '../../components/panels/NamaslayPanel/NamaslayPanel'
import ChartPanel from '../../components/panels/UserDataPanel/ChartPanel/ChartPanel'
import UserInfoPanel from '../../components/panels/UserDataPanel/UserInfoPanel/UserInfoPanel'
import {
  totalClassesAttendedByMonth,
  totalClassesByDayOfWeek,
  totalClassesByDiscipline,
  topFiveClasses
} from '../../dev_data/userData/data'

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

  const [quote, setQuote] = useState({})
  const [allClasses, setAllClasses] = useState({})
  const [topClasses, setTopClasses] = useState({})

  //pull this into parent later
  useEffect(() => {
    const getQuote = async () => {
      const res = await axios.get('/api/quote')
      const words = res.data[0].quote
      const id = res.data[0].id
      const author = res.data[0].author
      setQuote({ words, id, author })
    }
    getQuote()
  }, [])

  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get('/userdata/1')
      console.log(res.data);
    }
    getUserData()
  }, [])

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
      <div className="UserDataDash__UserInfo">
        <UserInfoPanel />
      </div>
      <div className="UserDataDash__QuoteBox">
        <p className="UserDataDash__QuoteBox__Quote">{quote.words}</p>
        <p className="UserDataDash__QuoteBox__Author">{quote.author}</p>
      </div>
      <div className="UserDataDash__ChartPanel1">
        <ChartPanel
          type={'Bar'}
          height={totalClassesByDayOfWeek.height}
          width={totalClassesByDayOfWeek.width}
          data={totalClassesByDayOfWeek.data}
          options={totalClassesByDayOfWeek.options}
        />
      </div>
      <div className="UserDataDash__Breathe">BREATHE</div>
      <div className="UserDataDash__ChartPanel2">
        <ChartPanel
          type={'Pie'}
          height={totalClassesByDiscipline.height}
          width={totalClassesByDiscipline.width}
          data={totalClassesByDiscipline.data}
          options={totalClassesByDiscipline.options}
        />

      </div>
      <div className="UserDataDash__ChartPanel3">
        <ChartPanel
          type={'Line'}
          height={totalClassesAttendedByMonth.height}
          width={totalClassesAttendedByMonth.width}
          data={totalClassesAttendedByMonth.data}
          options={totalClassesAttendedByMonth.options}
        />
      </div>
      <div className="UserDataDash__ChartPanel4">
        <ChartPanel
          type={'Bar'}
          height={topFiveClasses.height}
          width={topFiveClasses.width}
          data={topFiveClasses.data}
          options={topFiveClasses.options}
        /></div>

    </div>
  )

}

export default UserDataDash
