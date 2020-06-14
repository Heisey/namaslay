import React, { useEffect, useState } from 'react'
import './BreathePanel.scss'

export default function BreathePanel(props) {

  const breatheInterval = 4000;

  const [innerText, setInnerText] = useState('Just Breathe...')

  useEffect(() => {
    let breatheOutTimer;
    const timer = setInterval(() => {
      setInnerText('Breathe In...');
      breatheOutTimer = setInterval(() => {
        setInnerText('Breathe Out...');
      }, breatheInterval);

    }, breatheInterval);
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
        <p id="text"
        >{innerText}</p>
        <div className="BreathePanel__container__pointer-container">
          <div className="BreathePanel__container__pointer-container-pointer">
          </div>
        </div>
        <div className="BreathePanel__container__gradient-circle"></div>
      </div>
    </div>
  )
}
