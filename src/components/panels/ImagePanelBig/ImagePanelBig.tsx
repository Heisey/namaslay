import React from 'react';

import './ImagePanelBig.scss'
interface ImagePanelBigProps {
  url: string
}

const ImagePanelBig: React.FC <ImagePanelBigProps> = props => {
  const { url } = props
  
  return (
    <div className={`ImagePanelBig`}>
      <img 
        className="ImagePanelBig__image"
        src={url} 
        alt={url}
      />
      
    </div>
  )
}

export default ImagePanelBig
