import React from 'react'
import './ClassSelectionPanel.scss'

interface ClassSelectionPanelProps {
  classesForDay: any,
  selectedClassHandler: any
}

const ClassSelectionPanel: React.FC <ClassSelectionPanelProps> = props => {

  const { classesForDay, selectedClassHandler } = props

  const handleSelectedClass = (e) => {
    selectedClassHandler(e.target.id)
  }
  
  const loopThroughClasses = () => {
    
    if (classesForDay.length) {
      const listItems = classesForDay.map(el => (
        <li 
        id={el.id}
        onClick={handleSelectedClass}
        >
          {el.name}
        </li>
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
