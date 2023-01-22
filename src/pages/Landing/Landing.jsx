import './Landing.scss'

import React from 'react'
import LOGO from "../../assets/my_unsplash_logo.svg";
import { useAuth } from "../../contexts/authContext";

function Landing() {
    const { loginWithGoogle, loginAnonymously } = useAuth()

  return (
    <section id='landing'>
        <header>
            <img src={LOGO} alt="My unsplash logo" />
        </header>

        <center>
            <h1>Login with:</h1>

            <div className='login-methods'>
                <button onClick={loginWithGoogle}>Google</button>
                <button onClick={loginAnonymously}>Anonymously</button>
            </div>
        </center>
    </section>
  )
}

export default Landing