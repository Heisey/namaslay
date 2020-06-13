const totalClassesAttendedByMonth = {
  height: 450,
  width: 200,
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Classes Count',
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
    title: {
      display: true,
      text: 'Total Classes Attended By Month',
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

module.exports = { totalClassesAttendedByMonth }
