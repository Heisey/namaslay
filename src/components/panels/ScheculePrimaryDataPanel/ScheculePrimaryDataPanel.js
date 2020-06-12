import React from 'react';

const ScheculePrimaryDataPanel = props => {

  const { primaryDataPanel } = props

  return (
    <div className="ScheculePrimaryDataPanel">
      {primaryDataPanel.title === null && <h1>Puppies 2</h1>}
      {primaryDataPanel.id !== null && <span>{primaryDataPanel.info}</span>}
    </div>
  )
}

export default ScheculePrimaryDataPanel
