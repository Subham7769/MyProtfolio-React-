import React from 'react'
import './Experience.css'
import { Element } from 'react-scroll'


const Experience = () => {
  return (
    <Element className='experience' name='experience'>
        <div className="achievement">
            <div className="circle">1</div>
            <span>Internship</span>
            <span>Completed</span>
        </div>
        <div className="achievement">
            <div className="circle">30+</div>
            <span>Projects</span>
            <span>Completed</span>
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