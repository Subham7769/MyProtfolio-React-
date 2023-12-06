import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
  return (
    <div className='footer'>
    <img src={wave} alt="" style={{width:'100%'}}/>
    <div className="f-content">
        <span>Shubham.rapariya2@gmail.com</span>
        <div className="f-icons">
            <a href="https://www.instagram.com/shubhamrapariya/"><Insta color='white' size='3rem'/></a>
            <a href="https://github.com/Subham7769"><Github color='white' size='3rem'/></a>
            <a href="https://www.linkedin.com/in/shubhamjain7769/"><Linkedin color='white' size='3rem'/></a>
        </div>
    </div>
    </div>
  )
}

export default Footer