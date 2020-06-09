import React, { useState } from 'react'

// ?? Components
import Nav from '../../components/Nav/Nav';
import NinthBox from '../../components/boxes/navBoxes/NinthBox/NinthBox'
import TenthBox from '../../components/boxes/navBoxes/TenthBox/TenthBox'
import NamaslayPanel from '../../components/panels/NamaslayPanel/NamaslayPanel'

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
      <div className="UserProfile__SubscriptionDetails">UserProfile__SubscriptionDetails</div>
      <div className="UserProfile__ClassHistory">BROWSE YOUR CLASS HISTORY</div>
      <div className="UserProfile__BrowseReviews">UserProfile__BrowseReviews</div>
      <div className="UserProfile__Breathe">BREATHE</div>
      <div className="UserProfile__Data">View Your Data</div>
      <div className="UserProfile__ViewPanel">ViewPanel</div>
      <div className="UserProfile__Notifications">Notifications</div>
    </div>
  )

}

export default UserProfile
