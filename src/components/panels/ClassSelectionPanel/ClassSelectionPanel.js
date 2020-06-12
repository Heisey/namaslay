import React, { useState } from 'react'

import ClassSelectionPanelItem from './ClassSelectionPanelItem/ClassSelectionPanelItem.js'
import './ClassSelectionPanel.scss'

const ClassSelectionPanel = props => {

  const { 
    classesForDay, 
    secondaryDataPanelHandler, 
    renderOverlayHandler, 
    selectedClassHandler 
  } = props

  
  
  const loopThroughClasses = () => {
    if (classesForDay.length) {
      const listItems = classesForDay.map(el => (

        <ClassSelectionPanelItem
          id={el.id}
          secondaryDataPanelHandler={secondaryDataPanelHandler}
          renderOverlayHandler={renderOverlayHandler}
          selectedClassHandler={selectedClassHandler}
          program={el}
        />
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
