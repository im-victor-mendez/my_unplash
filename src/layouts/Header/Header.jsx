import './Header.scss'
import React from 'react'

import LOGO from '../../assets/my_unsplash_logo.svg'
import Button from '../../components/Button/Button'
import Search from '../../components/Search/Search'

function Header() {
  return (
    <header id='header'>
        <section className='header-left'>
            <img src={LOGO} alt="" />
            <Search id='header-search_name'></Search>
        </section>

        <Button type='confirm'>Add a photo</Button>
    </header>
  )
}

export default Header