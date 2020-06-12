import React from 'react';

import './TwentyFiveClass.scss';

export default function TwentyFiveClass(props) {

  const { showTwentyFiveClasses } = props

  const handleshowTwentyFiveClasses = () => {
    showTwentyFiveClasses()
  }

  return (
    <div 
      className="TwentyFiveClass"
      onClick={handleshowTwentyFiveClasses}
    >
      Twenty Five Classes
    </div>
  )
}