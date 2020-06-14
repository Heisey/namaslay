import React from 'react';
import MainButton from '../../Buttons/Main/Main'
import './UserDataPanel.scss'
import ChartPanel from '../ChartPanel/ChartPanel'
import { totalClassesAttendedByMonth } from '../../../dev_data/userData/data'

const UserDataPanel = props => {

  const { handleShowUserDataDash } = props
  return (
    <div className="UserDataPanel">
      <div className="UserDataPanel__button">
        <MainButton
          onClick={handleShowUserDataDash}
          message='View All Your Data'
        /></div>
      <h3 className="UserDataPanel__title"><ChartPanel
        type={'Bar'}
        height={totalClassesAttendedByMonth.height}
        width={totalClassesAttendedByMonth.width}
        data={totalClassesAttendedByMonth.data}
        options={totalClassesAttendedByMonth.options}
      /></h3>

      <div className="UserDataPanel__chart"></div>

    </div>
  )
}

export default UserDataPanel
