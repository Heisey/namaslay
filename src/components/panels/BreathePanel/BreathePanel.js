import React, { useEffect, useState } from 'react'
import { CSSTransition, transit } from 'react-css-transition'
import './BreathePanel.scss'
import BreatheSlider from '../../boxes/BreathePanelBoxes/Slider'
import Text from '../../boxes/BreathePanelBoxes/Text'
export default function BreathePanel(props) {

  const {
    breathInterval,
    handleBreathInterval,
    totalTime
  } = props

  const [innerText, setInnerText] = useState()
  const [textState, setTextState] = useState(true)

  let breatheTime = (totalTime / 5) * 2;
  let holdTime = totalTime / 5;

  function breathAnimation() {
    setInnerText('Breathe In...');
    setTextState(true)

    setTimeout(() => {
      setTextState(false)
      setInnerText('Breathe Out...');
    }, breatheTime + holdTime);
  }

  useEffect(() => {
    breathAnimation();
    setInterval(breathAnimation, totalTime);
  }, [])

  return (
    <div className="BreathePanel">
      <div className="BreathePanel__container">
        <div className="BreathePanel__container__circle"
        ></div>
        {textState &&
          <Text
            innerText={innerText}
            className='text1'
          />
        }
        {!textState &&
          <Text
            innerText={innerText}
            className='text2'
          />
        }
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
    </div >
  )
}
