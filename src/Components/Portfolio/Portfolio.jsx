import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css'
import sidebar from '../../img/sidebar.png'
import ecommerce from '../../img/ecommerce.png'
import hoc from '../../img/hoc.png'
import musicapp from '../../img/musicapp.png'

const Portfolio = () => {
  return (
    <div className="portfolio">
        <span>Recent Projects</span>
        <span>Portfolio</span>
        
        
        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'>
            <SwiperSlide>
                <img src={sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hoc} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={musicapp} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio



