import React, { useState, useEffect } from 'react'

import ClassSelectionPanelItem from './ClassSelectionPanelItem/ClassSelectionPanelItem.js'
import './ClassSelectionPanel.scss'

const ClassSelectionPanel = props => {

  const {
    classesForDay,
    secondaryDataPanelHandler,
    renderOverlayHandler,
    selectedClassHandler,
    selectedClass,
    renderPaymentHandler,
    currentUser,
    showAnimation,
    bookingInfoHandler,
    scheduleData
  } = props




  const loopThroughClasses = () => {
    if (classesForDay.length) {
      const listItems = classesForDay.map(el => (

        <ClassSelectionPanelItem
          key={el.id}
          selectedClass={selectedClass}
          secondaryDataPanelHandler={secondaryDataPanelHandler}
          renderOverlayHandler={renderOverlayHandler}
          renderPaymentHandler={renderPaymentHandler}
          selectedClassHandler={selectedClassHandler}
          currentUser={currentUser}
          program={el}
          bookingInfoHandler={bookingInfoHandler}
          classesForDay={classesForDay}
          scheduleData={scheduleData}
        />
      ))
      return listItems
    } else {
      return (
        <div className='ClassSelectionPanel__no-classes'>
          <h1>No Classes for that Filter</h1>
        </div>
      )
    }
  }

  return (
    <div className="ClassSelectionPanel">
      {!showAnimation && (
        <ul className='ClassSelectionPanel__list'>
          <li className='ClassSelectionPanel__listItem'>
            <span className='ClassSelectionPanel__listItem--timeTitle'>Time</span>
            <span className='ClassSelectionPanel__listItem--nameTitle'>Class Name</span>
            <span className='ClassSelectionPanel__listItem--bookTitle'>Book</span>
            <span className='ClassSelectionPanel__listItem--difficultyTitle'>Difficulty</span>
          </li>
          {loopThroughClasses()}
        </ul>
      )}
    </div>
  )
}

export default ClassSelectionPanel
