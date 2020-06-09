import React from 'react';
import MainButton from '../../Buttons/Main/Main'
import './UserDataPanel.scss'

const UserDataPanel: React.FC = props => {

  return (
    <div className="UserDataPanel">
      <div className="UserDataPanel__button">
        <MainButton
          message='View All Your Data'
        /></div>
      <h3 className="UserDataPanel__title">Total Classes Attended</h3>

      <div className="UserDataPanel__chart"></div>

    </div>
  )
}

export default UserDataPanel
