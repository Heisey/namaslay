import React, { useState } from 'react'
import './ChartPanel.scss'
import { Chart, Bar, HorizontalBar, Line, Pie } from 'react-chartjs-2'

export default function userDataChart(props) {
  const { height, width, data, options, type } = props

  Chart.scaleService.updateScaleDefaults('linear', {
    ticks: {
      min: 0
    }
  });

  const getChartType = (type) => {
    if (type === 'Bar') {
      return <Bar
        data={data}
        options={options}
        height={height}
        width={width}
      />
    } else if (type === 'Line') {
      return <Line
        data={data}
        options={options}
        height={height}
        width={width}
      />
    } else if (type === 'Pie') {
      return <Pie
        data={data}
        options={options}
        height={height}
        width={width}
      />
    } else {
      return <HorizontalBar
        data={data}
        options={options}
        height={height}
        width={width}
      />
    }
  }

  return (
    <div className="ChartPanel">
      {getChartType(type)}
    </div>
  )
}
