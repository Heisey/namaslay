import React from 'react'
import './ClassSelectionPanel.scss'

interface ClassSelectionPanelProps {
  classesForDay: any,
  selectedClassHandler: any,
}

const ClassSelectionPanel: React.FC<ClassSelectionPanelProps> = props => {

  const { classesForDay, selectedClassHandler } = props

  const handleSelectedClass = (e) => {
    selectedClassHandler(e.target.id)
  }

  const loopThroughClasses = () => {
    if (classesForDay.length) {
      const listItems = classesForDay.map((el, i) => (

        <li
          key={el.id}
          id={el.id}
          onClick={handleSelectedClass}
          className='ClassSelectionPanel__listItem'
        >
          <span className='ClassSelectionPanel__listItem--time'>{el.start_time}:00</span>
          <span className='ClassSelectionPanel__listItem--name'>{el.name}</span>
          <span className='ClassSelectionPanel__listItem--spots'>{el.spotsavailable}</span>
          <span className='ClassSelectionPanel__listItem--difficulty'>{el.difficulty}</span>
        </li>
      ))
      return listItems
    } else {
      return (<h1>Puppies</h1>)
    }
  }

  return (
    <div className="ClassSelectionPanel">
      <ul className='ClassSelectionPanel__list'>
        <li className='ClassSelectionPanel__listItem'>
          <span className='ClassSelectionPanel__listItem--timeTitle'>Time</span>
          <span className='ClassSelectionPanel__listItem--nameTitle'>Class Name</span>
          <span className='ClassSelectionPanel__listItem--spotsTitle'>Spots</span>
          <span className='ClassSelectionPanel__listItem--difficultyTitle'>Difficulty</span>
        </li>
        {loopThroughClasses()}
      </ul>
    </div>
  )
}

export default ClassSelectionPanel
