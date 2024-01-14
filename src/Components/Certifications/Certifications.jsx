import React from 'react'
import '../Portfolio/Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import { Element } from 'react-scroll'

import img1 from '../../Assets/Certificate/img (1).png'
import img2 from '../../Assets/Certificate/img (2).png'
import img3 from '../../Assets/Certificate/img (3).png'
import img4 from '../../Assets/Certificate/img (4).png'
import img5 from '../../Assets/Certificate/img (5).png'
import img6 from '../../Assets/Certificate/img (6).png'
import img7 from '../../Assets/Certificate/img (7).png'
import img8 from '../../Assets/Certificate/img (8).png'
import img9 from '../../Assets/Certificate/img (9).png'
import img10 from '../../Assets/Certificate/img (10).png'
import img11 from '../../Assets/Certificate/img (11).png'
import img12 from '../../Assets/Certificate/img (12).png'
import img13 from '../../Assets/Certificate/img (13).png'
import img14 from '../../Assets/Certificate/img (14).png'
import img15 from '../../Assets/Certificate/img (15).png'
import img16 from '../../Assets/Certificate/img (16).png'

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
  img13,
  img14,
  img15,
  img16,
];

const Certifications = () => {
  return (
    <Element className="portfolio" name="portfolio" style={{height:"70vh"}}>
        <span>Recent</span>
        <span>Certificates</span>

        {/* slider */}
        <Swiper
        spaceBetween={20}
        slidesPerView={1}
        grabCursor={true}
        breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            }}}
        className='portfolio-slider'>
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt="" />
              </SwiperSlide>
            ))}
        </Swiper>
    </Element>
  )
}

export default Certifications