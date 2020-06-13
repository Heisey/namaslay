import React, { useState } from 'react'
import './ChartPanel.scss'
import { Bar, HorizontalBar, Line, Pie } from 'react-chartjs-2'

export default function Chart(props) {


  const { height, width, data, options } = props

  return (
    <div className="ChartPanel">
      <Bar
        data={data}
        options={options}
        height={height}
        width={width}
      />
    </div>
  )
}
