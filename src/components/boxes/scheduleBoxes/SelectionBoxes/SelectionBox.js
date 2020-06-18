import React from 'react';

import './SelectionBox.scss'

const SelectionBox = props => {

  const { detail, type, handleTypeSelection } = props

  const handleSelected = () => {
    handleTypeSelection(detail.id, type)
  }

  return (
    <div
      id={detail.id}
      className="SelectionBox"
      onClick={handleSelected}
    >
      <span className="SelectionBox__name">{detail.name}</span>
      <img src={detail.imageurlsquare} alt={detail.imageurlsquare} />
    </div>
  )
}
export default SelectionBox
