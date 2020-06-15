import React, { useEffect, useState } from 'react'
import './BreathePanel.scss'
import BreatheSlider from '../../boxes/Slider/Slider'

export default function BreathePanel(props) {

  const [innerText, setInnerText] = useState('Just Breathe...')
  const [breathInterval, setBreathInterval] = useState(4000)

  const handleBreathInterval = (input) => {
    setBreathInterval(input * 1000)
  }

  useEffect(() => {
    const initTimer = setTimeout(() => {
      setInnerText('Breathe In...');
    }, breathInterval);
    return clearTimeout(initTimer)
  }, [])

  useEffect(() => {
    let breatheOutTimer;
    const timer = setInterval(() => {
      setInnerText('Breathe In...');
      breatheOutTimer = setInterval(() => {
        setInnerText('Breathe Out...');
      }, breathInterval);
    }, breathInterval);
    return () => {
      clearInterval(timer)
      clearInterval(breatheOutTimer)
    }
  })


  return (
    <div className="BreathePanel">
      <div className="BreathePanel__container">
        <div className="BreathePanel__container__circle"
        ></div>
        <p className="text" style={{ transition: breathInterval }}
        >{innerText}</p>
        <div className="BreathePanel__container__pointer-container">
          <div className="BreathePanel__container__pointer-container-pointer">
          </div>
        </div>
        <div className="BreathePanel__container__gradient-circle"></div>
      </div>


      <BreatheSlider
        onGary={handleBreathInterval}
      />
    </div>
  )
}
