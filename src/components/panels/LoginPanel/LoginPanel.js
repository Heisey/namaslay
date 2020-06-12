import React, { useState } from 'react'
import axios from 'axios'
import qs from 'qs'
import './LoginPanel.scss'
import { log } from 'util'
import SnakeBorderButton from '../../Buttons/SnakeBorderButton/SnakeBorderButton'

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}


export default function LoginPanel(props) {

  const { showPanel } = props

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const onChangeEmail = e => {
    e.preventDefault();
    setEmail(e.target.value)
  }
  const onChangePassword = e => {
    e.preventDefault();
    setPassword(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    const requestBody = { email, password }
    console.log(requestBody);


    axios.post(`/students/login`, qs.stringify(requestBody), config)
      .then((res) => {
        console.log(res.data);
        //{
        // id
        // email,
        // first_name,
        // last_name,
        // password
        // }
      })
      .catch((e) => {
        console.log(e);
      })

  }

  return (
    <div className={`LoginPanel LoginPanel--${showPanel ? 'show' : 'hidden'}`}>
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
    </div>
  )
}
