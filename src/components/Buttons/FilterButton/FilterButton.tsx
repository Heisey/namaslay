import React from 'react';

import './FilterButton.scss'

const FilterButton: React.FC<{ message: string }> = (props) => {
  return <button className="btn-filterButton">{props.message}</button>;
};

export default FilterButton;
