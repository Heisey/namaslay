import React, {useState} from 'react'

// import H2W4 from '../../components/boxes/H2W4/H2W4'
import Nav from '../../components/Nav/Nav'

import './Landing.scss';

const Landing: React.FC = () => {
  const [showNav, showNavHandler] = useState<boolean>(false)
  const handleShowNav = () => {
    showNavHandler(!showNav)
  }
  return (
    <div className="Landing">
      <Nav toggleNav={handleShowNav} />
      <div className="Landing__tl"></div>
      <div className="Landing__tr"></div>
      <div className="Landing__bl"></div>
      <div className="Landing__br"></div>
    </div>
  )
}


export default Landing;