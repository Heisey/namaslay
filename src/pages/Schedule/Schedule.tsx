import React, { useEffect, useState } from 'react'

// ?? Components
import Nav from '../../components/Nav/Nav';

// ?? Box Components

// ?? Panel Components
import CalendarPanel from '../../components/panels/CalendarPanel/CalendarPanel'
import NamaslayPanel from '../../components/panels/NamaslayPanel/NamaslayPanel'


import './Schedule.scss';

interface ScheduleProps {
  handleShowLanding: () => void,
  handleShowNav: () => void,
  handleShowPunchCard: () => void,
  handleShowSchedule: () => void,
  handleShowUserProfile: () => void,
  navState: boolean
}

const Schedule: React.FC <ScheduleProps> = props => {

  const { 
    handleShowLanding,
    handleShowNav,
    handleShowPunchCard,
    handleShowSchedule,
    handleShowUserProfile,
    navState
  } = props;

  const [selectedDay, selectedDayHandler] = useState(1)
  const [selectedMonth, selectedMonthHandler] = useState(1)
 
  useEffect(() => {
    const month = new Date().getMonth()
    selectedMonthHandler(month + 1)
  }, [])

  const handleCalendarDayChange = date => {
    let day: any = ("0" + date.getDate()).slice(-2)
    selectedDayHandler(day * 1)
  }

  const handleCalendarMonthChange = date => {
    let month: any = ("0" + (date.getMonth() + 1)).slice(-2);
    selectedMonthHandler(month * 1)
  }

  return (
    <div className="Schedule">
      <Nav
        handleShowLanding={handleShowLanding}
        handleShowNav={handleShowNav}
        handleShowPunchCard={handleShowPunchCard}
        handleShowSchedule={handleShowSchedule}
        handleShowUserProfile={handleShowUserProfile}
        navState={navState}
      />
      <div className="Schedule__namaslay">
        <NamaslayPanel
          panelSize='small' 
        />
      </div>
    
      <div className="Schedule__classesLeft">
        Classes Left
      </div>

      <div className="Schedule__calendar">
        <CalendarPanel 
          handleCalendarDayChange={handleCalendarDayChange}
          handleCalendarMonthChange={handleCalendarMonthChange}
        />
      </div>

      <div className="Schedule__classSelection">
        Class Selection
      </div>
    
      <div className="Schedule__dynamicSelection">
        Dynamic Selection
      </div>

      <div className="Schedule__teacherFilter">
        Teacher Filter
      </div>

      <div className="Schedule__disciplineFilter">
        Discipline Filter
      </div>

      <div className="Schedule__eventFilter">
        Event Filter
      </div>

      <div className="Schedule__difficultyFilter">
        Difficulty Filter
      </div>

      <div className="Schedule__clearFilters">
        Clear Filters
      </div>

      <div className="Schedule__teacherInfo">
        Teacher Info
      </div>

      <div className="Schedule__classInfo">
        class info
      </div>
    </div>
  )
}

export default Schedule;
