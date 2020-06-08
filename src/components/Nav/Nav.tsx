import React from 'react';

import './Nav.scss'

interface NavProps {
  toggleNav: () => void
}

const Nav: React.FC <NavProps> = props => {
  const { toggleNav } = props
  
  const handleToggle = () => {
    toggleNav()
  }

  return (
    <div 
      className="Nav"
      onClick={handleToggle}
    >
      hello
    </div>
  )
}

export default Nav;