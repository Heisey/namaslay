import React, { useState } from 'react'
import './Slider.scss'
import Slider from 'react-slider'

export default function BreatheSlider(props) {

  const { onGary, xValue } = props

  const [sliderValue, setSliderValue] = useState(xValue)

  const handleSetValueText = () => {
    if (sliderValue === 1) {
      return `${sliderValue} second`
    } else return `${sliderValue} seconds`
  }

  const handleTouchEnd = () => {
    onGary(sliderValue)
  }

  function handleSetSliderValue(x) {
    setSliderValue(x)
  }


  return (
    <div className='Slider'>
      <div className='Slider__container'>
        Choose Your Breath Rate
        <Slider
          className="Slider__container-slider"
          defaultValue={sliderValue}
          min={1}
          max={12}
          onAfterChange={handleTouchEnd}
          onChange={handleSetSliderValue}
        />
        <div className='Slider__container-value'>
          {handleSetValueText(sliderValue)}</div>
      </div>
    </div>
  )
}
