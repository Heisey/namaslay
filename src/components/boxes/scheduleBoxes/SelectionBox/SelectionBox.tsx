import React from 'react';

import './SelectionBox.scss'
interface SelectionBoxProps {
  key: number;
  detail: any;
  type: string;
  handleTypeSelection: any;
}

const SelectionBox: React.FC<SelectionBoxProps> = props => {

  const { detail, handleTypeSelection, type } = props

  const handleSelected = () => {
    handleTypeSelection(detail.id, type)
    console.log(detail);

  }

  return (
    <div
      id={detail.id}
      className="SelectionBox"
      style={{
        backgroundImage: `url(${detail.imageurl})`
      }}
      onClick={handleSelected}
    >

    </div>
  )
}
export default SelectionBox
