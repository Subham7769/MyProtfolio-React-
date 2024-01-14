import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css'
import { Element } from 'react-scroll'

import img1 from '../../img/youtube_clone_react.png'
import img2 from '../../img/Imagebazzar.png'
import img3 from '../../img/todoreact.png'
import img4 from '../../img/portfolio.jpeg'
import img5 from '../../img/blinkit.png'
import img6 from '../../img/acciojob.png'
import img7 from '../../img/Otarea.png'
import img8 from '../../img/food.png'
import img9 from '../../img/Jira.png'
import img10 from '../../img/Spotify.png'
import img11 from '../../img/cookpal.png'
import img12 from '../../img/AirBnb.png'
import img13 from '../../img/youtube.png'

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13
];

const Portfolio = () => {
  return (
    <Element className="portfolio" name="portfolio" >
        <span>Recent Projects</span>
        <span>Projects</span>

        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={1}
        grabCursor={true}
        className='portfolio-slider'>
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <a target="_blank" href="#"><img src={image} alt="" /><p className='live'>Live</p></a>
              </SwiperSlide>
            ))}
        </Swiper>
    </Element>
  )
}

export default Portfolio