import React from 'react';

import './Unlimited.scss';

export default function Unlimited(props) {

  const { showUnlimited } = props

  const handleshowUnlimited = () => {
    showUnlimited()
  }

  return (
    <div 
      className="Unlimited"
      onClick={handleshowUnlimited}
    >
      Unlimited
    </div>
  )
}