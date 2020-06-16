import React from 'react';
import './HomeBox.scss';

import SwordLogo from '../../../logos/SwordLogo/SwordLogo'

const HomeBox = props => {
  const { navState } = props
  return (
    <div className={`HomeBox HomeBox--${!navState ? 'small' : 'large'}`}>
      <span className="HomeBox__title--one">HO</span>
      <span className="HomeBox__title--two">ME</span>
      <div className="HomeBox__sword">
        <SwordLogo navState={navState} />
      </div>
    </div>
  )
}

export default HomeBox
