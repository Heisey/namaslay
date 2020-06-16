import React from 'react'
import './UserInfoPanel.scss'

export default function UserInfoPanel(props) {

  return (
    <div className="UserInfoPanel">
      <p className="UserInfoPanel__username">Astro Domine</p>
      <p className="UserInfoPanel__email">piper@thegatesofdawn.com</p>
    </div>
  )
}
