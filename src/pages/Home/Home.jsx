import './Home.scss'

import React from 'react'
import Header from '../../layouts/Header/Header'
import Images from '../../layouts/Images/Images'
import { SearchProvider } from '../../contexts/searchContext'

function Home() {
  return (
    <section id='home'>
      <SearchProvider>
        <Header />
        <Images />
      </SearchProvider>
    </section>
  )
}

export default Home