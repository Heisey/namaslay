import React from 'react';

import './FilterButton.scss'

const FilterButton = (props) => {
  const { message, onClick, filter } = props

  return (
    <div
      className="FilterButton"
      onClick={() => onClick(filter)}
    >
      <span className="FilterButton--one"></span>
      <span className="FilterButton--two"></span>
      <span className="FilterButton--three"></span>
      <span className="FilterButton--four"></span>
      {message}
    </div>
  )
};

export default FilterButton;
