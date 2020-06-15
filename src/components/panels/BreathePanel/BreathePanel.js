import React, { useEffect, useState } from 'react'
import './BreathePanel.scss'
import BreatheSlider from '../../boxes/Slider/Slider'
export default function BreathePanel(props) {

  const [innerText, setInnerText] = useState('Just Breathe...')
  const [breathInterval, setBreathInterval] = useState(2000)

  let totalTime = breathInterval * 2;
  let breatheTime = (totalTime / 5) * 2;
  let holdTime = totalTime / 5;

  function breathAnimation() {
    setInnerText('Breathe In...');
    setTimeout(() => {
      setInnerText('Breathe Out...');
    }, breatheTime + holdTime);
  }

  useEffect(() => {
    breathAnimation();
    setInterval(breathAnimation, totalTime);
  }, [])

  const handleBreathInterval = (input) => {
    setBreathInterval(input * 1000)
  }

  return (
    <div className="BreathePanel">
      <div className="BreathePanel__container">
        <div className="BreathePanel__container__circle"
        ></div>

        <p id='text'>
          {innerText}
        </p>

        <div className="BreathePanel__container__pointer-container">
          <div className="BreathePanel__container__pointer-container-pointer">
          </div>
        </div>
        <div className="BreathePanel__container__gradient-circle"></div>
      </div>


      <BreatheSlider
        xValue={breathInterval / 1000}
        onGary={handleBreathInterval}
      />
    </div>
  )
}
