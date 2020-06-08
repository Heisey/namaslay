import React from 'react';
interface NamaslayPanelProps {
  navState: boolean
}

const NamaslayPanel: React.FC <NamaslayPanelProps> = props => {
  const { navState } = props
  return (
    <div className={`NamaslayPanel NamaslayPanel--${navState ? 'small' : 'large'}`}>
      namaslay
    </div>
  )
}

export default NamaslayPanel
