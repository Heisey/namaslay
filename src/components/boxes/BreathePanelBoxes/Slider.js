import React, { useState } from 'react'
import './Slider.scss'
import Slider from 'react-input-slider'

export default function BreatheSlider(props) {

  const { onGary, xValue } = props
  const [sliderValue, setSliderValue] = useState({ x: xValue })

  const setValueText = (x) => {
    // onGary(x)
    if (sliderValue.x === 1) {
      return `${sliderValue.x} second`
    } else return `${sliderValue.x} seconds`
  }

  const handleDragEnd = () => {
    console.log(sliderValue.x);
    setTimeout(() => {
      console.log(sliderValue.x);
    }, 1000);
  }


  return (
    <div className='Slider'>
      <div className='Slider__container'>
        Choose Your Breath Rate
        <Slider
          xmax='12'
          className="Slider__container-slider"
          axis="x" x={sliderValue.x}
          onChange={({ x }) => setSliderValue({ x })}
          // onChange={handleOnChange}
          onDragEnd={handleDragEnd}
        />
        <div className='Slider__container-value'>
          {setValueText(sliderValue.x)}</div>
      </div>
    </div>
  )
}

