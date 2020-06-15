import React from 'react';

import './FilterButton.scss'

const FilterButton = (props) => {
  const { message, onClick, filter } = props

  return <button
    onClick={() => onClick(filter)}
    className="btn-filterButton">{message}</button>;
};

export default FilterButton;
