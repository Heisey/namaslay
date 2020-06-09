import React, { useState } from 'react'

// ?? Components
import Nav from '../../components/Nav/Nav';

// ?? Box Components

// ?? Panel Components
import NamaslayPanel from '../../components/panels/NamaslayPanel/NamaslayPanel'


import './Schedule.scss';

const Schedule: React.FC = () => {
  const [showNav, showNavHandler] = useState<boolean>(false)
  const handleShowNav = () => {
    showNavHandler(!showNav)
  }

  return (
    <div className="Schedule">
      <Nav
        navState={showNav}
        toggleNav={handleShowNav}  
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
        Calendar
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
