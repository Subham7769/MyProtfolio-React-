import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='n-wrapper'> 
    <div className="n-left">
        <div className="n-name">Subham</div>
        <span>toggle</span>
    </div>
    <div className="n-right">
        <div className="n-list">
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
            </ul>
        </div>
        <button className='button n-button'>
            Contact
        </button>
    </div>
    </nav>
  )
}

export default Navbar