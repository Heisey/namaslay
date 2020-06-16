import React from 'react';
import './UserDataPanel.scss'
import ChartPanel from '../ChartPanel/ChartPanel'
import SnakeBorderButton from '../../Buttons/SnakeBorderButton/SnakeBorderButton'

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
          '#B50E0E',
          '#C22B0D',
          '#CF470B',
          '#DC640A',
          '#E3730A',
          '#F08F08',
          '#fdac07'
        ],
        borderWidth: 1,
        borderColor: '#ef6101',
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
        fontSize: 30,
        fontColor: '#ef6101', 
        fontFamily: 'Metal Mania',
      },
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          fontColor: '#ef6101'
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
        <SnakeBorderButton 
          text='More'
        />
        {/* <MainButton
          onClick={handleShowUserDataDash}
          message='View All Your Data'
        /> */}
      </div>
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
