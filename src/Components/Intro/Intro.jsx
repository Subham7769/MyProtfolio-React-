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


const Intro = () => {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I Am</span>
                <span>Subham Jain</span>
                <span>Passionate frontend developer with expertise in web designing and development. Committed to delivering quality work, I bring creativity and technical proficiency to craft engaging user interfaces.</span>
            </div>
            <button className='button i-button'>Hire Me</button>
            <div className="i-icons">
                <a href="">
                    <img src={github} alt="" />
                </a>
                <a href="">
                    <img src={instagram} alt="" />
                </a>
                <a href="">
                    <img src={linkedin} alt="" />
                </a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" />
            <div style={{top:'-4%',left:'68%'}}>
                <FloatingDiv img={Crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top:'18rem',left:'0rem'}}>
                <FloatingDiv img={thumbup} txt1='Best Design' txt2='Award'/>
            </div>
        {/* blur divs */}
        <div className="blur" style={{background:'#edd0ff',left:'56%',top:'-18%'}}></div>
        <div className="blur" style={{background:'#C1F5FF',left:'-9rem',top:'17rem'}}></div>
        </div>
    </div>
  )
}

export default Intro