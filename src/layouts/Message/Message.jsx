import './Message.scss'

import React from 'react'

function Message({ id, children }) {
  return (
    <center id={id} className='message'>
        <div className='children-message'>{children}</div>
    </center>
  )
}

export default Message