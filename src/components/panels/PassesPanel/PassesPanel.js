import React from 'react';
import './PassesPanel.scss'

import SnakeBorderButton from '../../Buttons/SnakeBorderButton/SnakeBorderButton'

const PassesPanel = props => {

  const { passes, passCount } = props

  const displayClassesRemaining = () => {
    if (passCount) {
      if (passCount === 1) {
        return `${passCount} Class Left`
      } else return `${passCount} Classes Left`
    }
  }

  const determinePassType = () => {
    if (passes) {
      const passIDs = [...passes].map(pass => pass.id)
      const lastPassID = Math.max(...passIDs)
      const lastPass = [...passes].find(pass => pass.id === lastPassID)
      if (lastPass.type === 'single') {
        return 'Single Pass'
      } else if (lastPass.type === '5-pack') {
        return '5-Pack Punchcard'
      } else if (lastPass.type === '25-pack') {
        return '25-Pack Punchcard'
      } else return 'Monthly Unlimited'
    }
  }


  return (
    <div className="PassesPanel">

      <h3 className="PassesPanel__title">Passes</h3>

      <div className="PassesPanel__content">
        <p className="PassesPanel__line">Your Last Purchase: </p>
        <p className="PassesPanel__line"> {determinePassType()}</p>
        <p className="PassesPanel__line">{displayClassesRemaining()}</p>
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
