import './Search.scss'
import React from 'react'

function Search({ id }) {
  return (
    <label className='search'>
        <i className='material-symbols-outlined'>Search</i>
        <input type="search" name="name" id={id} placeholder='Search by name' />
    </label>
  )
}

export default Search