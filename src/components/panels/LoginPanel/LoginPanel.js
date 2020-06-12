import React from 'react'

import SnakeBorderButton from '../../Buttons/SnakeBorderButton/SnakeBorderButton'

import './LoginPanel.scss'

export default function LoginPanel(props) {

  const { showPanel } = props

  return (
    <div className={`LoginPanel LoginPanel--${showPanel ? 'show' : 'hidden'}`}>
      <form
        className="LoginPanel__form"
        method="POST"
        action="/"
      >
        <h1 className="LoginPanel__form--title">LOGIN</h1>
        <input
          className="LoginPanel__form--email"
          type="text"
          name=""
          placeholder="EMAIL"
        />

        <input
          className="LoginPanel__form--password"
          type="password"
          name=""
          placeholder="PASSWORD"
        />

        <button
          className="LoginPanel__form--button"
          type="submit"
          name=""
          // placeholder="EMAIL"
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}