import React, { useState } from 'react'

import NamaslayPanel from '../../components/panels/NamaslayPanel/NamaslayPanel'
import Nav from '../../components/Nav/Nav';

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
        navState={showNav} 
      />
    </div>
  )
}

export default Schedule;
