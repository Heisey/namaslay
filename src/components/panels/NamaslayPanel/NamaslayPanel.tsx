import React from 'react';

import './NamaslayPanel.scss'
interface NamaslayPanelProps {
  panelSize: string
}

const NamaslayPanel: React.FC <NamaslayPanelProps> = props => {
  const { panelSize } = props
  
  return (
    <div className={`NamaslayPanel NamaslayPanel--${panelSize}`}>
      <h1 className={`NamaslayPanel__title${panelSize === 'small' ? '--turned' : ''}`}>
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
