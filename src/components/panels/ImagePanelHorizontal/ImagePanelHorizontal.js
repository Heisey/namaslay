import React from 'react'

import './ImagePanelHorizontal.scss';

export default function imagePanelHorizontal(props) {

  const { url } = props

  return (
    <div className="ImagePanelHorizontal">
      <img 
        src={url} 
        alt={url}
        className="ImagePanelHorizontal__image"
      />
    </div>
  )
}