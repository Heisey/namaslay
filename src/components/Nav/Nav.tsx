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
    >
      <div 
        className="Nav__button"
        onClick={handleToggle}
      >

        {/* // ?? Closed Nav Menu */}
        {!navState && <div className="Nav__button--open">
          <span>---</span>
          <span>---</span>
          <span>---</span>
        </div>}

        {/* // ?? Opened Nav Menu */}
        {navState && <div className="Nav__button--close">
          <span>x</span>
        </div>}
      </div>
    </div>
  )
}

export default Nav;
