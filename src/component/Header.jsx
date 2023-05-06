import React from 'react'
import logo from '../assets/image/desktop/logo.svg'
import ham from '../assets/image/desktop/icon-hamburger.svg'

const Header = () => {
  return (
    <>
      <header className='header'>
        <nav>
          <div className="header__logo">
            <img src={logo} alt="Loopstudio" />
          </div>
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Events</a></li>
              <li><a href="">Products</a></li>
              <li><a href="">Support</a></li>
            </ul>
          <div className="hambagar">
            <img src={ham} alt="image" />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
