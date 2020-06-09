import React from 'react'

// ?? Components
import Nav from '../../components/Nav/Nav';
import NamaslayPanel from '../../components/panels/NamaslayPanel/NamaslayPanel'
import NotificationsPanel from '../../components/panels/NotificationsPanel/NotificationsPanel'
import UserDataPanel from '../../components/panels/UserDataPanel/UserDataPanel'

import './UserProfile.scss';

interface UserProfileProps {
  handleShowLanding: () => void,
  handleShowNav: () => void,
  handleShowPunchCard: () => void,
  handleShowSchedule: () => void,
  handleShowUserProfile: () => void,
  navState: boolean
}

const UserProfile: React.FC <UserProfileProps> = props => {

  const { 
    handleShowLanding,
    handleShowNav,
    handleShowPunchCard,
    handleShowSchedule,
    handleShowUserProfile,
    navState
  } = props;

  return (
    <div className="UserProfile">
      <Nav
        navState={navState}
        handleShowLanding={handleShowLanding}
        handleShowPunchCard={handleShowPunchCard}
        handleShowNav={handleShowNav}
        handleShowSchedule={handleShowSchedule}
        handleShowUserProfile={handleShowUserProfile}
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
