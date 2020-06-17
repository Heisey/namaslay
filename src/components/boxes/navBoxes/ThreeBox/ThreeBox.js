import React, { useState, useEffect } from 'react';
import './ThreeBox.scss';
import axios from 'axios'

const ThreeBox = props => {

  const { navState } = props

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

  return (
    <div className={`ThreeBox ThreeBox--${!navState ? 'small' : 'large'}`}>
      {navState && <div className="ThreeBox__QuoteBox">
        <p className="ThreeBox__QuoteBox__Quote">{quote.words}</p>
        <p className="ThreeBox__QuoteBox__Author">{quote.author}</p></div>}
    </div>
  )
}

export default ThreeBox
