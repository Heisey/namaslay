import React from 'react';
import MainButton from '../../Buttons/Main/Main'
import './UserDataPanel.scss'
import ChartPanel from '../ChartPanel/ChartPanel'

const UserDataPanel = props => {

  const { handleShowUserDataDash } = props

  const chart1 = {
    height: 450,
    width: 100,
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [{
        label: 'Classes',
        data: [5, 9, 11, 7, 5, 13, 12],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ],
        borderWidth: 1,
        borderColor: '#777',
        hoverBorderWidth: 3,
        hoverBorderColor: '#000'
      }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      title: {
        display: true,
        text: 'Your Favourite Yoga Days',
        fontSize: 25
      },
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          fontColor: '#000'
        },
        layout: {
          padding: {
            left: 50,
            right: 0,
            bottom: 0,
            top: 0
          },
          tooltips: {
            enabled: true
          }
        }
      }
    }
  }
  return (
    <div className="UserDataPanel">
      <div className="UserDataPanel__button">
        <MainButton
          onClick={handleShowUserDataDash}
          message='View All Your Data'
        /></div>
      <h3 className="UserDataPanel__title"><ChartPanel
        type={'Bar'}
        height={chart1.height}
        width={chart1.width}
        data={chart1.data}
        options={chart1.options}
      /></h3>

      <div className="UserDataPanel__chart"></div>

    </div>
  )
}

export default UserDataPanel
