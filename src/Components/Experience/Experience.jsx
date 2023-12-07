import React from 'react'
import './Experience.css'
import { Element } from 'react-scroll'


const Experience = () => {
  return (
    <Element className='experience' name='experience'>
        <div className="achievement">
            <div className="circle">8+</div>
            <span>Years</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle">80+</div>
            <span>Completed</span>
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle">12+</div>
            <span>Certifications</span>
            <span>Completed</span>
        </div>
    </Element>
  )
}

export default Experience