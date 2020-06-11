import React from 'react'
import './ClassSelectionPanel.scss'

interface ClassSelectionPanelProps {
  classesForDay: any
}

const ClassSelectionPanel: React.FC <ClassSelectionPanelProps> = props => {

  const { classesForDay } = props
  
  const loopThroughClasses = () => {
    
    if (classesForDay.length) {
      const listItems = classesForDay.map(el => (
        <li>{el.name}</li>
      ))
      return listItems
      return <h1>testing</h1>
    } else {
      return (<h1>Hello</h1>)
    }
  }

  return (
    <div className="ClassSelectionPanel">
      <ul>
        {loopThroughClasses()}
      </ul>
    </div>
  )
}

export default ClassSelectionPanel
