import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll';
import { Element } from 'react-scroll'


const Navbar = () => {
  return (
    <Element className='n-wrapper' name='navbar'> 
    <div className="n-left">
        <div className="n-name">Subham</div>
        <Toggle/>
    </div>
    <div className="n-right">
        <div className="n-list">
            <ul>
                <li><Link to="navbar" smooth={true} duration={300}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={300}>About</Link></li>
                <li><Link to="experience" smooth={true} duration={300}>Achievement</Link></li>
                <li><Link to="portfolio" smooth={true} duration={300}>Portfolio</Link></li>
                <li><Link to="testimonial" smooth={true} duration={300}>Testimonials</Link></li>
            </ul>
        </div>
        <button className='button n-button'>
        <Link to="contact" smooth={true} duration={300}>Contact</Link>
        </button>
    </div>
    </Element>
  )
}

export default Navbar