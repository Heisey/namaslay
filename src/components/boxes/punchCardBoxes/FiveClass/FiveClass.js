import React from 'react';

import './FiveClass.scss';

export default function FiveClass(props) {

  const { showFiveClasses } = props

  const handleshowFiveClasses = () => {
    showFiveClasses()
  }

  return (
    <div 
      onClick={handleshowFiveClasses}
      className="FiveClass"
    >
      Five Class
    </div>
  )
}