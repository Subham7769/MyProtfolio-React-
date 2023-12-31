import React from 'react'
import './Intro.css'
import github from '../../img/github.png'
import instagram from '../../img/instagram.png'
import linkedin from '../../img/linkedin.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { Element } from 'react-scroll'
import { Link } from 'react-scroll';




const Intro = () => {
  return (
    <Element className='intro' name='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I Am</span>
                <span>Subham Jain</span>
                <span>As a trained professional, I bring a dynamic combination of creativity and technical proficiency to frontend development and web design. Committed to delivering high-quality work, I specialize in crafting engaging user interfaces.</span>
            </div>
            <button className='button i-button'><Link to="contact" smooth={true} duration={300}>Hire Me</Link></button>
            <div className="i-icons">
                <a href="https://github.com/Subham7769">
                    <img src={github} alt="" />
                </a>
                <a href="https://www.instagram.com/shubhamrapariya/">
                    <img src={instagram} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/shubhamjain7769/">
                    <img src={linkedin} alt="" />
                </a>
            </div>
        </div>
        <div className="i-right">
            <div><img src={boy} alt="" /></div>

            <img src={glassesimoji} alt="" />

            <FloatingDiv img={Crown} txt1='Frontend' txt2='Developer'/>

            <FloatingDiv img={thumbup} txt1='Outstanding' txt2='Results'/>

        {/* blur divs */}
        <div className="blur" style={{background:'#edd0ff',left:'56%',top:'-18%'}}></div>
        <div className="blur" style={{background:'#C1F5FF',left:'-9rem',top:'17rem'}}></div>
        </div>
    </Element>
  )
}

export default Intro