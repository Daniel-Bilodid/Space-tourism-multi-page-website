import React from 'react'
import logo from '../../assets/shared/logo.svg'
import './nav.scss'
const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <div className="nav__wrapper">
          <div className="nav__logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="nav__bar">
              <div className='hr'></div>
            <ul className='nav__list'>
              <li className='nav__list-item active'><span>00</span>Home</li>
              <li className='nav__list-item'><span>01</span>Destination</li>
              <li className='nav__list-item'><span>02</span>Crew</li>
              <li className='nav__list-item'><span>03</span>Technology</li>
            </ul>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav