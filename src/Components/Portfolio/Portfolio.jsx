import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css'
import sidebar from '../../img/sidebar.png'
import ecommerce from '../../img/ecommerce.png'
import hoc from '../../img/hoc.png'
import musicapp from '../../img/musicapp.png'
import { Element } from 'react-scroll'


const Portfolio = () => {

    
    
  return (
    <Element className="portfolio" name="portfolio">
        <span>Recent Projects</span>
        <span>Portfolio</span>
        
        
        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={2}
        grabCursor={true}
        className='portfolio-slider'>
            <SwiperSlide>
                <a href=""><img src={sidebar} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href=""><img src={ecommerce} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href=""><img src={hoc} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href=""><img src={musicapp} alt="" /></a>
            </SwiperSlide>
        </Swiper>
    </Element>
  )
}

export default Portfolio



