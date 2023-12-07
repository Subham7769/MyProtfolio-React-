import React from 'react'
import './Intro.css'
import github from '../../img/github.png'
import instagram from '../../img/instagram.png'
import linkedin from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
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
                <span>Passionate frontend developer with expertise in web designing and development. Committed to delivering quality work, I bring creativity and technical proficiency to craft engaging user interfaces.</span>
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
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" />
            <div className='FloatingDivUpper'>
                <FloatingDiv img={Crown} txt1='Frontend' txt2='Developer'/>
            </div>
            <div className='FloatingDivLower'>
                <FloatingDiv img={thumbup} txt1='Outstanding' txt2='Results'/>
            </div>
        {/* blur divs */}
        <div className="blur" style={{background:'#edd0ff',left:'56%',top:'-18%'}}></div>
        <div className="blur" style={{background:'#C1F5FF',left:'-9rem',top:'17rem'}}></div>
        </div>
    </Element>
  )
}

export default Intro