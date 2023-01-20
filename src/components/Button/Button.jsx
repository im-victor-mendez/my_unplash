import './Button.scss'
import React from 'react'

function Button({ id, type, onClick, children }) {
  return (
    <button className={`button ${type}`} id={id} onClick={onClick}>{children}</button>
  )
}

export default Button