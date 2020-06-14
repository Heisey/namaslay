import React, { useState, useEffect } from 'react'
import axios from 'axios'

// ?? Components
import Nav from '../../components/Nav/Nav';
import NamaslayPanel from '../../components/panels/NamaslayPanel/NamaslayPanel'
import ChartPanel from '../../components/panels/ChartPanel/ChartPanel'
import UserInfoPanel from '../../components/panels/UserInfoPanel/UserInfoPanel'
import BreathePanel from '../../components/panels/BreathePanel/BreathePanel'
import FilterButton from '../../components/Buttons/FilterButton/FilterButton'

import './UserDataDash.scss';

const UserDataDash = props => {

  const {
    handleShowLanding,
    handleShowNav,
    handleShowPunchCard,
    handleShowSchedule,
    handleShowUserProfile,
    handleShowUserDataDash,
    navState
  } = props;

  const [quote, setQuote] = useState({ words: null, id: null, author: null })

  const [pieChartData, setPieChartData] = useState({})
  const [lineGraphData, setLineGraphData] = useState({})
  const [barChartData, setBarChartData] = useState({ count: [], name: [] })
  const [filterYear, setFilterYear] = useState(null)

  //pull this into parent later
  useEffect(() => {
    const getQuote = async () => {
      try {
        const res = await axios.get('/api/quote')
        const words = res.data[0].quote
        const id = res.data[0].id
        const author = res.data[0].author
        setQuote({ words, id, author })
      }
      catch (e) {
        throw e
      }
    }
    getQuote()
  }, [])

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get('/userdata/1')
        function getPieChartData() {
          const discs = res.data.allClasses.reduce((acc, c) => {
            if (c.year === 2019) {
              if (acc[2019][c.disc]) {
                if (c.disc === 'Power Yoga') {
                  acc[2019][c.disc] += 1
                } else if (c.disc === 'Vinyasa') {
                  acc[2019][c.disc] += 1
                } else if (c.disc === 'Yin') {
                  acc[2019][c.disc] += 1
                } else if (c.disc === 'Hot Yoga') {
                  acc[2019][c.disc] += 1
                } else if (c.disc === 'Hatha') {
                  acc[2019][c.disc] += 1
                } else if (c.disc === 'Ashtanga') {
                  acc[2019][c.disc] += 1
                }
              } else {
                if (c.disc === 'Power Yoga') {
                  acc[2019][c.disc] = 1
                } else if (c.disc === 'Vinyasa') {
                  acc[2019][c.disc] = 1
                } else if (c.disc === 'Yin') {
                  acc[2019][c.disc] = 1
                } else if (c.disc === 'Hot Yoga') {
                  acc[2019][c.disc] = 1
                } else if (c.disc === 'Hatha') {
                  acc[2019][c.disc] = 1
                } else if (c.disc === 'Ashtanga') {
                  acc[2019][c.disc] = 1
                }
              }
            } else {
              if (acc[2020][c.disc]) {
                if (c.disc === 'Power Yoga') {
                  acc[2020][c.disc] += 1
                } else if (c.disc === 'Vinyasa') {
                  acc[2020][c.disc] += 1
                } else if (c.disc === 'Yin') {
                  acc[2020][c.disc] += 1
                } else if (c.disc === 'Hot Yoga') {
                  acc[2020][c.disc] += 1
                } else if (c.disc === 'Hatha') {
                  acc[2020][c.disc] += 1
                } else if (c.disc === 'Ashtanga') {
                  acc[2020][c.disc] += 1
                }
              } else {
                if (c.disc === 'Power Yoga') {
                  acc[2020][c.disc] = 1
                } else if (c.disc === 'Vinyasa') {
                  acc[2020][c.disc] = 1
                } else if (c.disc === 'Yin') {
                  acc[2020][c.disc] = 1
                } else if (c.disc === 'Hot Yoga') {
                  acc[2020][c.disc] = 1
                } else if (c.disc === 'Hatha') {
                  acc[2020][c.disc] = 1
                } else if (c.disc === 'Ashtanga') {
                  acc[2020][c.disc] = 1
                }
              }
            }

            return acc;
          }, {
            2019: {},
            2020: {}
          })
          setPieChartData(discs)
        }
        function getLineGraphData() {
          const monthData = res.data.allClasses.reduce((acc, c) => {
            if (c.year === 2019) {
              if (c.monthnumber === 1) {
                if (acc[2019]['January']) {
                  acc[2019]['January'] += 1
                } else {
                  acc[2019]['January'] = 1
                }
              } else if (c.monthnumber === 2) {
                if (acc[2019]['February']) {
                  acc[2019]['February'] += 1
                } else {
                  acc[2019]['February'] = 1
                }
              } else if (c.monthnumber === 3) {
                if (acc[2019]['March']) {
                  acc[2019]['March'] += 1
                } else {
                  acc[2019]['March'] = 1
                }
              } else if (c.monthnumber === 4) {
                if (acc[2019]['April']) {
                  acc[2019]['April'] += 1
                } else {
                  acc[2019]['April'] = 1
                }
              } else if (c.monthnumber === 5) {
                if (acc[2019]['May']) {
                  acc[2019]['May'] += 1
                } else {
                  acc[2019]['May'] = 1
                }
              } else if (c.monthnumber === 6) {
                if (acc[2019]['June']) {
                  acc[2019]['June'] += 1
                } else {
                  acc[2019]['June'] = 1
                }
              } else if (c.monthnumber === 7) {
                if (acc[2019]['July']) {
                  acc[2019]['July'] += 1
                } else {
                  acc[2019]['July'] = 1
                }
              } else if (c.monthnumber === 8) {
                if (acc[2019]['August']) {
                  acc[2019]['August'] += 1
                } else {
                  acc[2019]['August'] = 1
                }
              } else if (c.monthnumber === 9) {
                if (acc[2019]['September']) {
                  acc[2019]['September'] += 1
                } else {
                  acc[2019]['September'] = 1
                }
              } else if (c.monthnumber === 10) {
                if (acc[2019]['October']) {
                  acc[2019]['October'] += 1
                } else {
                  acc[2019]['October'] = 1
                }
              } else if (c.monthnumber === 11) {
                if (acc[2019]['November']) {
                  acc[2019]['November'] += 1
                } else {
                  acc[2019]['November'] = 1
                }
              } else {
                if (acc[2019]['December']) {
                  acc[2019]['December'] += 1
                } else {
                  acc[2019]['December'] = 1
                }
              }
            } else {
              if (c.monthnumber === 1) {
                if (acc[2020]['January']) {
                  acc[2020]['January'] += 1
                } else {
                  acc[2020]['January'] = 1
                }
              } else if (c.monthnumber === 2) {
                if (acc[2020]['February']) {
                  acc[2020]['February'] += 1
                } else {
                  acc[2020]['February'] = 1
                }
              } else if (c.monthnumber === 3) {
                if (acc[2020]['March']) {
                  acc[2020]['March'] += 1
                } else {
                  acc[2020]['March'] = 1
                }
              } else if (c.monthnumber === 4) {
                if (acc[2020]['April']) {
                  acc[2020]['April'] += 1
                } else {
                  acc[2020]['April'] = 1
                }
              } else if (c.monthnumber === 5) {
                if (acc[2020]['May']) {
                  acc[2020]['May'] += 1
                } else {
                  acc[2020]['May'] = 1
                }
              } else if (c.monthnumber === 6) {
                if (acc[2020]['June']) {
                  acc[2020]['June'] += 1
                } else {
                  acc[2020]['June'] = 1
                }
              } else if (c.monthnumber === 7) {
                if (acc[2020]['July']) {
                  acc[2020]['July'] += 1
                } else {
                  acc[2020]['July'] = 1
                }
              } else if (c.monthnumber === 8) {
                if (acc[2020]['August']) {
                  acc[2020]['August'] += 1
                } else {
                  acc[2020]['August'] = 1
                }
              } else if (c.monthnumber === 9) {
                if (acc[2020]['September']) {
                  acc[2020]['September'] += 1
                } else {
                  acc[2020]['September'] = 1
                }
              } else if (c.monthnumber === 10) {
                if (acc[2020]['October']) {
                  acc[2020]['October'] += 1
                } else {
                  acc[2020]['October'] = 1
                }
              } else if (c.monthnumber === 11) {
                if (acc[2020]['November']) {
                  acc[2020]['November'] += 1
                } else {
                  acc[2020]['November'] = 1
                }
              } else {
                if (acc[2020]['December']) {
                  acc[2020]['December'] += 1
                } else {
                  acc[2020]['December'] = 1
                }
              }
            }
            return acc;
          }, {
            2019: {},
            2020: {}
          })
          setLineGraphData(monthData)
        }
        function getbarChartData() {
          const topClasses2019 = res.data.topClasses2019.reduce((acc, c) => {
            acc[c.class] = Number(c.count)
            return acc;
          }, {})
          const topClasses2020 = res.data.topClasses2020.reduce((acc, c) => {
            acc[c.class] = Number(c.count)
            return acc;
          }, {})
          console.log(res.data.topClasses);
          const totalTopClasses = res.data.topClasses.reduce((acc, c) => {
            console.log(c.class);
            return acc;
          }, {})
          // console.log(totalTopClasses);

          // const count = res.data.topClasses.map(c => Number(c.count))
          // const name = res.data.topClasses.map(c => c.class)
          const topClassesData = { 2019: topClasses2019, 2020: topClasses2020 }
          console.log(topClassesData);


          setBarChartData(topClassesData)
        }
        getPieChartData()
        getLineGraphData()
        getbarChartData()
      }
      catch (e) {
        throw e
      }
    }
    getUserData()
  }, [])

  const handleFilterYear = (inp) => {
    setFilterYear(inp)
  }
  function sumObjectsByKey(...objs) {
    return objs.reduce((a, b) => {
      for (let k in b) {
        if (b.hasOwnProperty(k))
          a[k] = (a[k] || 0) + b[k];
      }
      return a;
    }, {});
  }

  const applyBarChartFilter = () => {
    if (filterYear === '2019') {
      return { ...barChartData[2019] }
    } else if (filterYear === '2020') {
      return { ...barChartData[2020] }
    } else {
      const temp = { ...barChartData }
      const tempAry = Object.values(temp)
      const year2020 = tempAry.pop()
      const year2019 = tempAry[0];
      return sumObjectsByKey(year2020, year2019)
    }
  }

  const applyLineGraphFilter = () => {
    if (filterYear === '2019') {
      return { ...lineGraphData[2019] }
    } else if (filterYear === '2020') {
      return { ...lineGraphData[2020] }
    } else {
      const temp = { ...lineGraphData }
      const tempAry = Object.values(temp)
      const year2020 = tempAry.pop()
      const year2019 = tempAry[0];
      return sumObjectsByKey(year2020, year2019)
    }
  }
  const applyPieChartFilter = () => {
    if (filterYear === '2019') {
      return { ...pieChartData[2019] }
    } else if (filterYear === '2020') {
      return { ...pieChartData[2020] }
    } else {
      const temp = { ...pieChartData }
      const tempAry = Object.values(temp)
      const year2020 = tempAry.pop()
      const year2019 = tempAry[0];
      return sumObjectsByKey(year2020, year2019)
    }
  }
  const applyFavouriteDaysFilter = () => {
    if (filterYear === '2019') {
      return [3, 7, 7, 4, 4, 8, 7]
    } else if (filterYear === '2020') {
      return [2, 2, 4, 3, 1, 5, 5]
    } else return [5, 9, 11, 7, 5, 13, 12]
  }



  const chart1 = {
    height: 450,
    width: 100,
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [{
        label: 'Classes',
        data: applyFavouriteDaysFilter(),
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

  const pieChart = {
    height: 400,
    width: 100,
    data: {
      // labels: Object.keys(pieChartData),
      labels: Object.keys(applyPieChartFilter()),

      datasets: [{
        label: 'Classes',
        // data: Object.values(pieChartData),
        data: Object.values(applyPieChartFilter()),
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
      tooltips: {
        callbacks: {

        }
      },
      maintainAspectRatio: false,
      responsive: true,
      title: {
        display: true,
        text: 'Your Favourite Disciplines',
        fontSize: 25
      },
      legend: {
        display: true,
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

  const lineGraph = {
    height: 425,
    width: 200,
    data: {
      // labels: Object.keys(lineGraphData),
      labels: Object.keys(applyLineGraphFilter()),
      datasets: [{
        fill: '-1',
        label: 'Classes',
        // data: Object.values(lineGraphData),
        data: Object.values(applyLineGraphFilter()),
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
      scales: {
        yAxes: [{
          title: 'Classes'
        }]
      },
      title: {
        display: true,
        padding: 50,
        text: 'Monthly Attendance',
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
            right: 200,
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

  const barChart = {
    height: 400,
    width: 100,
    data: {
      // labels: [...barChartData.name],
      labels: Object.keys(applyBarChartFilter()),
      datasets: [{
        label: 'Classes',
        // data: [...barChartData.count],
        data: Object.values(applyBarChartFilter()),
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
      tooltips: {
        callbacks: {

        }
      },
      maintainAspectRatio: false,
      responsive: true,
      title: {
        display: true,
        text: 'Your Top 5 Classes',
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
    <div className="UserDataDash">
      <Nav
        navState={navState}
        handleShowLanding={handleShowLanding}
        handleShowPunchCard={handleShowPunchCard}
        handleShowNav={handleShowNav}
        handleShowSchedule={handleShowSchedule}
        handleShowUserProfile={handleShowUserProfile}
        handleShowUserDataDash={handleShowUserDataDash}
      />
      <div className="UserDataDash__Namaslay">
        <NamaslayPanel
          panelSize={'small'}
        /></div>
      <div className="UserDataDash__UserInfo">
        <UserInfoPanel />
      </div>
      <div className="UserDataDash__QuoteBox">
        <p className="UserDataDash__QuoteBox__Quote">{quote.words}</p>
        <p className="UserDataDash__QuoteBox__Author">{quote.author}</p>
      </div>
      <div className="UserDataDash__ChartPanel1">
        <ChartPanel
          type={'Bar'}
          height={chart1.height}
          width={chart1.width}
          data={chart1.data}
          options={chart1.options}
        />
      </div>
      <div className="UserDataDash__Breathe"><BreathePanel /></div>
      <div className="UserDataDash__ChartPanel2">
        <ChartPanel
          type={'Pie'}
          height={pieChart.height}
          width={pieChart.width}
          data={pieChart.data}
          options={pieChart.options}
        />

      </div>
      <div className="UserDataDash__ChartPanel3">
        <ChartPanel
          type={'Line'}
          height={lineGraph.height}
          width={lineGraph.width}
          data={lineGraph.data}
          options={lineGraph.options}
        />
        <FilterButton
          onClick={handleFilterYear}
          filter='2019'
          message='2019' />
        <FilterButton
          onClick={handleFilterYear}
          filter='2020'
          message='2020' />
        <FilterButton
          onClick={handleFilterYear}
          filter={null}
          message='Clear Filters' />
      </div>
      <div className="UserDataDash__ChartPanel4">
        <ChartPanel
          type={'Bar'}
          height={barChart.height}
          width={barChart.width}
          data={barChart.data}
          options={barChart.options}
        /></div>
    </div>
  )
}

export default UserDataDash
