import React from 'react'
import axios from 'axios'
import qs from 'qs'
import './PunchCardPanel.scss';
import { log } from 'util';
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export default function PunchCardPanel(props) {

  const { type } = props

  const handlePurchase = () => {
    const requestBody = type
    console.log(type);
    if (type) {
      //update to add state instead of 1
      axios.post(`/students/1/passes`, qs.stringify(requestBody), config)
        .then((res) => {
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        })
    }
  }

  return (
    <div className="PunchCardPanel">
      <div
        className="PunchCardPanel__button"
        onClick={handlePurchase}
      >
        click me
      </div>
    </div>
  )
}
