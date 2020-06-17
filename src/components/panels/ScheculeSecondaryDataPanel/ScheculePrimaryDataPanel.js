import React, {useState} from 'react';
import PersonLogo from '../../logos/PersonLogo2/PersonLoop2'

import './ScheculePrimaryDataPanel.scss'
const ScheculePrimaryDataPanel = props => {

  const [animate, animateHandler] = useState (true)

  const { primaryDataPanel } = props

  const handleStartAnimation = () => {
    console.log('true')
    animateHandler(() => true)
  }

  const handleEndAnimation = () => {
    console.log(false)
    animateHandler(() => false)
  }

  return (
    <div className="ScheculePrimaryDataPanel">
      {primaryDataPanel.title === null && (
        <div 
          className='ScheculePrimaryDataPanel__logo'
        >
          <PersonLogo />
        </div>
      )}
      {primaryDataPanel.id !== null && (
        <div className='ScheculePrimaryDataPanel__info'>
            <div 
              className={`ScheculePrimaryDataPanel__container  ScheculePrimaryDataPanel__container--${animate ? 'forward': 'reverse'}`}
              onMouseOver={handleStartAnimation}
              onMouseOut={handleEndAnimation}  
              >
            <span className='ScheculePrimaryDataPanel__info--bio'>
              {primaryDataPanel.info}
            </span>

            <img 
              className='ScheculePrimaryDataPanel__info--img'
              src={primaryDataPanel.img} 
              alt={primaryDataPanel.img} 
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ScheculePrimaryDataPanel
