import React from 'react';

import SnakeBorderButton from '../../Buttons/SnakeBorderButton/SnakeBorderButton'

import './NamaslayPanel.scss'

const NamaslayPanel = props => {
  const { handleShowLoginPanel, panelSize, turnedClass } = props

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

      {panelSize !== 'small' && (
        <div className="NamaslayPanel__buttons">
          <div className="NamaslayPanel__login">
            <SnakeBorderButton 
              text="login"
              clickHandler={handleShowLoginPanel}
            />
          </div>

          <div className="NamaslayPanel__logout">
            <SnakeBorderButton 
              text="sign up"
              clickHandler={handleShowLoginPanel}
            />
          </div>

        </div>  
      )}
      
    </div>
  )
}

export default NamaslayPanel
