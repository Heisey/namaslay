import React from 'react';
import './ClassesBox.scss';

import SwordLogo from '../../../logos/SwordLogo/SwordLogo'

const ClassesBox = props => {

  const { navState } = props;

  return (
    <div className={`ClassesBox ClassesBox--${!navState ? 'small' : 'large'}`}>
      <span className="ClassesBox__title--one">CLAS</span>
      <span className="ClassesBox__title--two">SES</span>
      <div className="ClassesBox__sword">
        <SwordLogo navState={navState} />
      </div>
    </div>
  )
}

export default ClassesBox
