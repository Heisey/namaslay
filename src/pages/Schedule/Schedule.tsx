import React, { useState } from 'react'

// ?? Components
import Nav from '../../components/Nav/Nav';

// ?? Box Components
import TeacherBox from '../../components/boxes/scheduleBoxes/TeacherBox/TeacherBox'

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
      <NamaslayPanel
        panelSize={'small'} 
      />
      <TeacherBox />
    </div>
  )
}

export default Schedule;
