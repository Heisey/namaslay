import React from 'react';
import './StoriesBox.scss';

import SwordLogo from '../../../logos/SwordLogo/SwordLogo'

const StoriesBox = props => {

  const { navState } = props

  return (
    <div className={`StoriesBox StoriesBox--${!navState ? 'small' : 'large'}`}>
      <span className="StoriesBox__title--one">STOR</span>
      <span className="StoriesBox__title--two">IES</span>
      <div className="StoriesBox__sword">
        <SwordLogo navState={navState} />
      </div>
    </div>
  )
}

export default StoriesBox
