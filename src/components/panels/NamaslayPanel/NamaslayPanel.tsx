import React from 'react';

import './NamaslayPanel.scss'
interface NamaslayPanelProps {
  panelSize: string
}

const NamaslayPanel: React.FC <NamaslayPanelProps> = props => {
  const { panelSize } = props
<<<<<<< HEAD
  
=======
>>>>>>> pages/schedule
  return (
    <div className={`NamaslayPanel NamaslayPanel--${panelSize}`}>
      namaslay
    </div>
  )
}

export default NamaslayPanel
