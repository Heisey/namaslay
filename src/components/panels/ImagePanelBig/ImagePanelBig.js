import React from 'react';
import './ImagePanelBig.scss'

const ImagePanelBig = props => {
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
