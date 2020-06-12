import React from 'react';

import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'

import './CalendarPanel.scss'

const CalendarPanel = props => {

  const {
    handleCalendarDayChange,
    handleCalendarMonthChange
  } = props

  return (
    <div className="CalendarPanel">
      <Calendar
        onClickDay={handleCalendarDayChange}
        onClickMonth={handleCalendarMonthChange}
        next2Label={null}
        prev2Label={null}
        nextLabel={null}
        prevLabel={null}
      />
    </div>
  )
}

export default CalendarPanel
