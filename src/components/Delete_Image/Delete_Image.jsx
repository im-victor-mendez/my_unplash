import './Delete_Image.scss'

import React, { useState } from 'react'
import { useAuth } from '../../contexts/authContext'
import { useImage } from '../../contexts/imageContext'
import deleteImage from '../../firebase/deleteImage'
import Button from '../Button/Button'

function Delete_Image() {
    const [password, setPassword] = useState('')

    const { user } = useAuth()
    const { imageUid } = useImage()

    const deleteMessage = document.getElementById('delete_image-message')

    function onChange(event) { setPassword(event.target.value) }

    function onDelete(event) {
        event.preventDefault()

        deleteImage(user, imageUid)
        .finally(() => { deleteMessage.classList.remove('active') })
    }

    function cancel(event) {
        event.preventDefault()

        deleteMessage.classList.remove('active')
    }

    return (
    <form className='delete_image'>
        <h1>Are you sure?</h1>
        {!user.emailVerified && <label>
            Password
            <input
                type="password"
                name="password"
                id="delete_image-password"
                placeholder='******************'
                value={password}
                onChange={onChange}
                required />
        </label>}

        <div className='delete_image-buttons'>
            <Button type='submit' className='delete' onClick={onDelete}>Delete</Button>
            <Button className='good_cancel' onClick={cancel}>Cancel</Button>
        </div>
    </form>
  )
}

export default Delete_Image