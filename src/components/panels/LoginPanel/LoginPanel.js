import React, { useState } from 'react'
import PersonLogo from '../../logos/PersonLogo/PersonLoop'
import LoadingAnimation from '../../LoadingAnimation/LoadingAnimation'
import axios from 'axios'
import qs from 'qs'
import './LoginPanel.scss'
// import { log } from 'util'
// import SnakeBorderButton from '../../Buttons/SnakeBorderButton/SnakeBorderButton'

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}


export default function LoginPanel(props) {

  const { showLoggedInHandler, showPanel, currentUserHandler, onSchedule, noPassesLeftHandler  } = props

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [showForm, showFormHandler] = useState(true)
  const [showLoading, showLoadingHandler] = useState(false)
  const [showError, showErrorHandler] = useState(false)

  const onChangeEmail = e => {

    e.preventDefault();
    setEmail(e.target.value)
  }

  const onChangePassword = e => {
    e.preventDefault();
    setPassword(e.target.value)
  }

  const handleSubmit = e => {
    showFormHandler(false)
    showLoadingHandler(true)

    e.preventDefault();
    const requestBody = { email, password }


    axios.post(`/students/login`, qs.stringify(requestBody), config)
      .then((res) => {
        
        if (res.data.status === 'success') {
          currentUserHandler(() => res.data.data)
          showLoadingHandler(false)
          showLoggedInHandler(true)
          
          if (onSchedule) {
            if (res.data.data.passCount === 0) {
              console.log('passcount is ', res.data.data.passCount)
              noPassesLeftHandler(true)
            }
          }

        }
        if (res.data.status === 'failed') {
          showFormHandler(false)
          showLoadingHandler(false)
          showErrorHandler(true)
        }
        
      })
      .catch((e) => {
        console.log('hello')
        console.log(e);
      })

  }

  const handleGoBack = () => {
    showFormHandler(true)
    showLoadingHandler(false)
    showErrorHandler(false)

  }

  return (
    <div className={`LoginPanel LoginPanel--${showPanel ? 'show' : 'hidden'}`}>
      
      {showLoading && <LoadingAnimation />}
      {showError && (
        <div className="LoginPanel__error">
          <h1>Something went wrong</h1>
          <button onClick={handleGoBack}>Go Back</button>
        </div>
      )}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="LoginPanel__form"
        >
          <h1 className="LoginPanel__form--title">LOGIN</h1>
          <input
            className="LoginPanel__form--email"
            type="text"
            name="email"
            placeholder="EMAIL"
            onChange={onChangeEmail}
          />

          <input
            className="LoginPanel__form--password"
            type="password"
            name="password"
            placeholder="PASSWORD"
            onChange={onChangePassword}
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
      )}
    </div>
  )
}
