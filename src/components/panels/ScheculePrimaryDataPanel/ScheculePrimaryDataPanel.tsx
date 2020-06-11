import React from 'react';

interface ScheculePrimaryDataPanelProps {
  primaryDataPanel: any
}

const ScheculePrimaryDataPanel: React.FC <ScheculePrimaryDataPanelProps> = props => {
  
  const { primaryDataPanel } = props
  
  return (
    <div className="ScheculePrimaryDataPanel">
      {primaryDataPanel.title === null && <h1>Puppies 2</h1>}
      {primaryDataPanel.id !== null && <span>{primaryDataPanel.info}</span>}
    </div>
  )
}

export default ScheculePrimaryDataPanel