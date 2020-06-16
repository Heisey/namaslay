import React, { useState, useEffect } from 'react'
import axios from 'axios'
import qs from 'qs'
import './PunchCardPanel.scss';
import SnakeBorderButton from '../../Buttons/SnakeBorderButton/SnakeBorderButton'
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export default function PunchCardPanel(props) {

  const { type, setPassCount, price } = props
  
const [quote, setQuote] = useState({ words: null, id: null, author: null })

  useEffect(() => {
    const getQuote = async () => {
      try {
        const res = await axios.get('/api/quote')
        const words = res.data[0].quote
        const id = res.data[0].id
        const author = res.data[0].author
        setQuote({ words, id, author })
      }
      catch (e) {
        throw e
      }
    }
    getQuote()
  }, [])

  const handlePurchase = () => {
    const requestBody = type
    if (type) {
      if (type === 'single') {
        setPassCount(prev => prev + 1);
      } else if ( type === '5-pack') {
        setPassCount(prev => prev + 5)
      } else if ( type === '25-pack') {
        setPassCount(prev => prev + 25)
      } else if (type === 'monthly') {
        setPassCount(prev => prev + 9999)
      }
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
      {price !== 0 && (
        <>
          <span className="PunchCardPanel__title">
            GET <span>{type}</span> NOW
          </span>

          <span className='PunchCardPanel__word'>
            FOR
          </span>

          <span className='PunchCardPanel__price'>
            ${price}
          </span>
          <div
            className="PunchCardPanel__button"
          >
            <SnakeBorderButton 
              text='BUY'
              clickHandler={handlePurchase}
            />
          </div>
        </>
      )}
      {price === 0 && (
        <>
          <span className="PunchCardPanel__quote">
            {quote.words}
          </span>
          <span className="PunchCardPanel__author">
            {quote.author}
          </span>
        </>
      )}
    </div>
  )
}
