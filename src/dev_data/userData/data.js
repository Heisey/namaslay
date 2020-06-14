const totalClassesAttendedByMonth = {
  height: 425,
  width: 200,
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      fill: '-1',
      label: 'Classes',
      data: [8, 12, 15, 9, 11, 7],
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
      text: 'Total Classes By Month',
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

const totalClassesByDayOfWeek = {
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
      text: 'Total Classes By Weekday',
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

const totalClassesByDiscipline = {
  height: 400,
  width: 100,
  data: {
    labels: ['Vinyasa', 'Yin', 'Hatha', 'Asthanga', 'Hot Yoga', 'Power Yoga'],
    datasets: [{
      label: 'Classes',
      data: [25, 8, 2, 1, 19, 7],
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
      text: 'Total Classes by Discipline',
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

const topFiveClasses = {
  height: 400,
  width: 100,
  data: {
    labels: ['Intro Yoga 1', 'Yoga for MMA 2', 'Intro Yoga 4', 'Intro Yoga 2', 'Yoga for MMA 8'],
    datasets: [{
      label: 'Classes',
      data: [3, 3, 2, 2, 2],
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
      text: 'Top 5 Classes',
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

module.exports = {
  totalClassesAttendedByMonth,
  totalClassesByDayOfWeek,
  totalClassesByDiscipline,
  topFiveClasses
}
