import React from 'react';
import './PunchCardBox.scss';

import SwordLogo from '../../../logos/SwordLogo/SwordLogo'

const PunchCardBox = props => {

  const { navState } = props
  return (
    <div className={`PunchCardBox PunchCardBox--${!navState ? 'small' : 'large'}`}>
      <span className="PunchCardBox__title--one">PUNC</span>
      <span className="PunchCardBox__title--two">HCARD</span>
      <div className="PunchCardBox__sword">
        <SwordLogo navState={navState} />
      </div>
    </div>
  )
}

export default PunchCardBox
