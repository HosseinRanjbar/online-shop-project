import React from 'react'
import './assets/Header.css'

const Header = () => {
  return (
    <header>
      <input type="search" placeholder='search...' className='search-input' />

      <img src="https://kaaryar.ir/wp-content/uploads/2022/12/Karyaar-Logo-with-name.png" alt="Kaaryar Logo" className="logo" />
    </header>
  )
}

export default Header