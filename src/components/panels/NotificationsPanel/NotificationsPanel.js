import React from 'react';

import './NotificationsPanel.scss'

const NotificationsPanel = props => {

  return (
    <div className="NotificationsPanel">
      <h3 className="NotificationsPanel__title">Notifications</h3>
      <div className="NotificationsPanel__content">
        <p className="NotificationsPanel__line">
        <span className="NotificationsPanel__line--flag">UPCOMING</span> 
        <span className="NotificationsPanel__line--message">Upcoming Workshop: June 22-25</span>
        </p>
        <p className="NotificationsPanel__line">
          <span className="NotificationsPanel__line--flag">ANNOUNCEMENT</span>
          <span className="NotificationsPanel__line--message">Welcome Our New Teacher: Vera Lynn</span>
        </p>
        <p className="NotificationsPanel__line">
          <span className="NotificationsPanel__line--flag">INTEREST</span>
          <span className="NotificationsPanel__line--message">Guided Meditation by Tara Brach: June 12</span>
        </p>
      </div>

    </div>
  )
}

export default NotificationsPanel
