import React from 'react';
import MainButton from '../../Buttons/Main/Main'
import './PassesPanel.scss'

const PassesPanel: React.FC = props => {

  return (
    <div className="PassesPanel">

      <h3 className="PassesPanel__title">Membership & Passes</h3>

      <div className="PassesPanel__content">
        <p className="PassesPanel__line">10-Pack Punchcard</p>
        <p className="PassesPanel__line">0 Classes Left</p>
        <p className="Passes__line">Expires 07/22</p>
      </div>

      <div className="PassesPanel__button">
        <MainButton
          message='Manage Subscription'
        /></div>
    </div>
  )
}

export default PassesPanel
