import React, { useState } from 'react'

// ?? Components
import Nav from '../../components/Nav/Nav';

import NamaslayPanel from '../../components/panels/NamaslayPanel/NamaslayPanel'
import NotificationsPanel from '../../components/panels/NotificationsPanel/NotificationsPanel'
import UserDataPanel from '../../components/panels/UserDataPanel/UserDataPanel'
import PassesPanel from '../../components/panels/PassesPanel/PassesPanel'

import './UserProfile.scss';
import '../Landing/Landing.scss';

const UserProfile: React.FC = () => {
  const [showNav, showNavHandler] = useState<boolean>(false)
  const handleShowNav = () => {
    showNavHandler(!showNav)
  }
  return (
    <div className="UserProfile">
      <Nav
        navState={showNav}
        toggleNav={handleShowNav}
      />
      <div className="UserProfile__Namaslay">
        <NamaslayPanel
          panelSize={'small'}
        /></div>
      <div className="UserProfile__NextClass">
        NEXT CLASS:
        12pm Tues Jun 11
        Lukewarm Hatha
        Boba Fett
      </div>
      <div className="UserProfile__AccountSettings">MANAGE
      ACCOUNT &
SETTINGS</div>
      <div className="UserProfile__SubscriptionDetails"><PassesPanel /></div>
      <div className="UserProfile__ClassHistory">BROWSE YOUR CLASS HISTORY</div>
      <div className="UserProfile__BrowseReviews">UserProfile__BrowseReviews</div>
      <div className="UserProfile__Breathe">BREATHE</div>
      <div className="UserProfile__Data"><UserDataPanel

      /></div>
      <div className="UserProfile__ViewPanel">ViewPanel</div>
      <div className="UserProfile__Notifications">
        <NotificationsPanel

        /></div>
    </div>
  )

}

export default UserProfile
