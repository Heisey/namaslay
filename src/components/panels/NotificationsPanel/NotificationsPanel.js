import React from 'react';

import './NotificationsPanel.scss'

const NotificationsPanel = props => {

  return (
    <div className="NotificationsPanel">
      <h3 className="NotificationsPanel__title">Notifications</h3>
      <div className="NotificationsPanel__content">
        <p className="NotificationsPanel__line">06/07: Your punchcard is empty!</p>
        <p className="NotificationsPanel__line">06/02: Upcoming Workshop: June 22-25</p>
        <p className="NotificationsPanel__line">05/31: Welcome Our New Teacher: Vera Lynn</p>
        <p className="NotificationsPanel__line">05/21: Guided Meditation by Tara Brach: June 12</p>
      </div>

    </div>
  )
}

export default NotificationsPanel
