import React from 'react'
import './Services.css'
import heartemoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import Card from '../Cards/Card'
import Resume from './Subham-Jain-Resume.pdf'
import { Element } from 'react-scroll'



const Services = () => {
  return (
    <Element className='services' name='services' >
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing <br/>elit. Molestiae labore amet ratione quae, id temporibus?</span>
            <a href={Resume} download>
                <button className="button s-button" >Download CV</button>
            </a>
        </div>
        {/* right side */}
        <div className="cards">

            <div style={{left:'14rem'}}>
                <Card 
                emoji={heartemoji} 
                heading={'Design'} 
                detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"} />
            </div>

            <div style={{top:'12rem',left:'-4rem'}}>
                <Card 
                emoji={glasses} 
                heading={'Developer'} 
                detail={"HTML, CSS, JavaScript, React"} />
            </div>

            <div style={{top:'19rem',left:'12rem'}}>
                <Card 
                emoji={humble} 
                heading={'UI/UX'} 
                detail={"Lorem ipsum dolor sit amet, consectetur ut."} />
            </div>

        {/* blur divs */}
        <div className="blur" style={{background:'#edd0ff',left:'12rem',top:'8rem'}}></div>
        </div>
        
        {/* blur divs */}
        <div className="blur" style={{background:'#C1F5FF',left:'-18rem',top:'15rem'}}></div>
    </Element>
  )
}

export default Services