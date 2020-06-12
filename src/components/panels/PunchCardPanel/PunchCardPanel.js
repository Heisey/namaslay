import React from 'react'

import './PunchCardPanel.scss';

export default function PunchCardPanel(props) {

  const handlePurchase = {
    
  }

  return (
    <div className="PunchCardPanel">
      <div 
        className="PunchCardPanel__button"
        onClick={handlePurchase}
      >
        click me
      </div>
    </div>
  )
}