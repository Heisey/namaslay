import React from 'react';
import './PassesPanel.scss'

import SnakeBorderButton from '../../Buttons/SnakeBorderButton/SnakeBorderButton'

const PassesPanel = props => {

  return (
    <div className="PassesPanel">

      <h3 className="PassesPanel__title">Passes</h3>

      <div className="PassesPanel__content">
        <p className="PassesPanel__line">10-Pack Punchcard</p>
        <p className="PassesPanel__line">0 Classes Left</p>
        <p className="Passes__line">Expires 07/22</p>
      </div>

      <div className="PassesPanel__button">
        <SnakeBorderButton 
          text="MANAGE"
        />
      </div>
    </div>
  )
}

export default PassesPanel
