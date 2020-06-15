import React, { useEffect, useState } from 'react'
import './BreathePanel.scss'
import BreatheSlider from '../../boxes/BreathePanelBoxes/Slider'
import Text from '../../boxes/BreathePanelBoxes/Text'
export default function BreathePanel(props) {

  const [innerText, setInnerText] = useState()
  const [breathInterval, setBreathInterval] = useState(2000)
  const [textClassName, setTextClassName] = useState('text1')
  const [textState, setTextState] = useState(true)

  let totalTime = breathInterval * 2;
  let breatheTime = (totalTime / 5) * 2;
  let holdTime = totalTime / 5;

  function breathAnimation() {
    setInnerText('Breathe In...');
    setTimeout(() => {
      setInnerText('Breathe Out...');
    }, breatheTime + holdTime);
  }

  // !! why doesn't this re-trigger the animations?
  function textAnimation() {
    setTextState(!textState)
    // setTextClassName('text1');
    setTimeout(() => {
      setTextState(!textState)
      // setTextClassName('text2');
    }, breatheTime + holdTime);
  }

  useEffect(() => {
    breathAnimation();
    textAnimation();
    setInterval(breathAnimation, totalTime);
    setInterval(textAnimation, totalTime);
  }, [])

  // !! how the fuck am i going to do this
  const handleBreathInterval = (input) => {
    setBreathInterval(input * 1000)
  }

  return (
    <div className="BreathePanel">
      <div className="BreathePanel__container">
        <div className="BreathePanel__container__circle"
        ></div>
        {textState &&
          <Text
            innerText={innerText}
            className='text1'
          />}
        {!textState &&
          <Text
            innerText={innerText}
            className='text2'
          />}

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
