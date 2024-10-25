import React from 'react'
import { Link } from 'react-scroll'
const Navigations = () => {
  return (
    <div className='navbar'>
      <nav className='container'>
        <div className="logo">
          Link In Blink
        </div>
        <ul>
        <li className='nav-item'>
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}>
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link activeClass="active" to="hotel" spy={true} smooth={true} offset={-100} duration={500}>
          Hotel
        </Link>
      </li>
      <li className='nav-item'>
        <Link activeClass="active" to="event" spy={true} smooth={true} offset={-100} duration={500}>
          Event
        </Link>
      </li>
      <li className='nav-item'>
        <Link activeClass="active" to="contact-us" spy={true} smooth={true} offset={-150} duration={500}>
          Contact Us
        </Link>
      </li>
    </ul>
        <button><a href="#">Login</a></button>
      </nav>
    </div >
  )
}

export default Navigations
