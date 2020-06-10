import React from 'react'
import './DynamicDataPanel.scss'

const DynamicDataPanel: React.FC<{ data: any[] }> = props => {

  const { data } = props

  const tempData = [...data]
  const type: string = tempData.pop()
  const newData = tempData.map((d) => Object.values(d))
  const details = newData.map((d, i) => {
    return (
      <li key={i + 1}>{d}</li>
    )
  })

  return (
    <div className="DynamicDataPanel">
      {data.length !== 0 && <h3>Select Your {type}:</h3>}
      <ul>{details}</ul>
    </div>
  )
}

export default DynamicDataPanel
