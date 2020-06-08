import React, { useState } from 'react'

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
    </div>
  )
}

export default Schedule;
