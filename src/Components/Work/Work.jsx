import React from 'react'
import './Work.css'
import Upwork from "../../img/Upwork.png"
import facebook from "../../img/Facebook.png"
import fiverr from "../../img/fiverr.png"
import amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"

const Work = () => {
  return (
    <div className='work'>
        {/* left side */}
        <div className="awesome">
            <span>Works for all these</span>
            <span>Brands & client</span>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing 
                <br/>elit. Molestiae labore amet ratione quae, id te
                <br/>elit. Molestiae labore amet ratione quae, id temporibus?</span>
                <button className="button s-button" >Hire Me</button>
        </div>

        {/* right side */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={facebook} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
            </div>
            {/* background circle */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>

        {/* blur divs */}
        <div className="blur" style={{background:'#C1F5FF',left:'-18rem',top:'15rem'}}></div>

    </div>
  )
}

export default Work