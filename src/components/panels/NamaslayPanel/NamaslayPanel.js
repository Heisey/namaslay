import React from 'react';

import './NamaslayPanel.scss'

const NamaslayPanel = props => {
  const { panelSize, turnedClass } = props

  return (
    <div className={`NamaslayPanel NamaslayPanel--${panelSize}`}>
      <h1 className={`NamaslayPanel__title${panelSize === 'small' ? (turnedClass === '2' ? '--turned2' : '--turned') : ''}`}>
        <span className="NamaslayPanel__title--nama">
          Nama
        </span>
        <span className="NamaslayPanel__title--slay">
          Slay
        </span>
      </h1>
      {panelSize !== 'small' && <p className="NamaslayPanel__quote">
        Happiness is not by chance. its by choice
      </p>}
    </div>
  )
}

export default NamaslayPanel
