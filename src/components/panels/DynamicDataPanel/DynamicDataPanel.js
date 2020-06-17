import React from 'react'
import './DynamicDataPanel.scss'
import SelectionBox from '../../boxes/scheduleBoxes/SelectionBoxes/SelectionBox'
import SwordLogo from '../../logos/SwordLogo/SwordLogo'
import PersonLogo from '../../logos/PersonLogo3/PersonLoop3'
const DynamicDataPanel = props => {

  const { data, handleTypeSelection, quote } = props

  const tempData = [...data]
  const type = tempData.pop()

  const details = tempData.map(detail => {
    return (
      <SelectionBox
        key={detail.id}
        detail={detail}
        type={type}
        handleTypeSelection={handleTypeSelection}
      />
    )
  })

  console.log(tempData)

  return (
    <div className="DynamicDataPanel">
      {tempData.length === 9 && <div className="DynamicDataPanel__grid--one">{details}</div>}
      {(data.length < 9 && data.length !== 0) && (
        <div className='DynamicDataPanel__grid--two'>
          {details}
          <div className='DynamicDataPanel__sword--one'>
            <PersonLogo />
          </div>

          <div className='DynamicDataPanel__sword--two'>
            <PersonLogo />

          </div>

          <div className='DynamicDataPanel__personLogo--one'>
            <PersonLogo />
          </div>

          <div className='DynamicDataPanel__personLogo--two'>
            <PersonLogo />
          </div>
        </div>
      )}
      {tempData.length === 0 &&
        <div className="DynamicDataPanel__QuoteBox">
          <p className="DynamicDataPanel__QuoteBox__Quote">{quote.words}</p>
          <p className="DynamicDataPanel__QuoteBox__Author">{quote.author}</p>
        </div>}
    </div>
  )
}

export default DynamicDataPanel
