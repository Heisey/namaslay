import React from 'react';

import './Nav.scss'

interface NavProps {
  toggleNav: () => void,
  navState: boolean
}

const Nav: React.FC <NavProps> = props => {
  const { navState, toggleNav } = props

  const handleToggle = () => {
    toggleNav()
  }

  return (
    <div 
      className={`Nav Nav--${navState ? 'large' : 'small'}`}
      onClick={handleToggle}
    >
      hello
    </div>
  )
}

export default Nav;
