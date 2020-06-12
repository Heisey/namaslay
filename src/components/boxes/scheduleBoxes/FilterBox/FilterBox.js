import React from 'react';

const FilterBox = props => {

  const { handleFilter } = props
  return (
    <div
      onClick={handleFilter}
      className="FilterBox"
    >
      s
    </div>

  )
}


export default FilterBox
