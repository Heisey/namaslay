import React from 'react'

export default function Text(props) {

  const { innerText, className } = props

  return (
    <p className={className}>
      {innerText}
    </p>
  )
}
