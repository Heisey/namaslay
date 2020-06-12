import React from 'react';

import './OneClass.scss';

export default function OneClass(props) {

  const { showSingleClasses } = props

  const handlwShowSingClass = () => {
    showSingleClasses()
  }
  return (
    <div 
      className="OneClass"
      onClick={handlwShowSingClass}
    >
      One Class
    </div>
  )
}