import './Home.scss'

import React from 'react'
import Header from '../../layouts/Header/Header'
import Images from '../../layouts/Images/Images'

function Home() {
  return (
    <section id='home'>
        <Header />
        <Images />
    </section>
  )
}

export default Home