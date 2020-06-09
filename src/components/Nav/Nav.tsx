import React from 'react';
import './Nav.scss'
import TeacherBox from '../boxes/navBoxes/TeacherBox/TeacherBox'
import ClassesBox from '../boxes/navBoxes/ClassesBox/ClassesBox'
import StoriesBox from '../boxes/navBoxes/StoriesBox/StoriesBox'
import FourthBox from '../boxes/navBoxes/FourthBox/FourthBox'
import FifthBox from '../boxes/navBoxes/FifthBox/FifthBox'
import SixthBox from '../boxes/navBoxes/SixthBox/SixthBox'
import SeventhBox from '../boxes/navBoxes/SeventhBox/SeventhBox'
import EighthBox from '../boxes/navBoxes/EighthBox/EighthBox'
import NinthBox from '../boxes/navBoxes/NinthBox/NinthBox'
import TenthBox from '../boxes/navBoxes/TenthBox/TenthBox'


interface NavProps {
  toggleNav: () => void,
  navState: boolean
}

const Nav: React.FC<NavProps> = props => {
  const { navState, toggleNav } = props

  const handleToggle = () => {
    toggleNav()
  }

  return (
    <div
      className={`Nav Nav--${navState ? 'large' : 'small'}`}
    >
      {navState && <>
        <div className="Nav__column-outer">
          <TeacherBox />
          <ClassesBox />
          <StoriesBox />
          <FourthBox />
        </div>
        <div className="Nav__column-inner">
          <NinthBox />
          <TenthBox />
        </div>
        <div className="Nav__column-outer">
          <FifthBox />
          <SixthBox />
          <SeventhBox />
          <EighthBox />
        </div>
      </>
      }

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
