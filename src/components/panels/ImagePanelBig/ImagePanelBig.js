import React from 'react';
import './ImagePanelBig.scss'

const ImagePanelBig = props => {
  const { size, url } = props

  return (
    <div className={`ImagePanelBig`}>
      <img
        className={`ImagePanelBig__image--${size}`}
        src={url}
        alt={url}
      />

    </div>
  )
}

export default ImagePanelBig
