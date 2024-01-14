import React from 'react'
import '../Portfolio/Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import { Element } from 'react-scroll'
import img1 from '../../Assets/Certificate/Agile with Atlassian Jira.png'
import img2 from '../../Assets/Certificate/Meta_HTML & CSS in Depth 04.png'
import img3 from '../../Assets/Certificate/Meta_Programmin with javascript 04.png'
import img4 from '../../Assets/Certificate/Meta_React_Basics 05.png'
import img5 from '../../Assets/Certificate/Meta_Version Control 03.png'
import img6 from '../../Assets/Certificate/Meta_Introduction to Front-End Development_01.jpeg'
import img7 from '../../Assets/Certificate/Corporate Telephone Etiquette Batch 07.png'
import img8 from '../../Assets/Certificate/Business_Atiquette.png'
import img9 from '../../Assets/Certificate/SoftSkills.png'
import img10 from '../../Assets/Certificate/Presentation.png'
import img11 from '../../Assets/Certificate/Improve_Interpersonal_Skills.png'
import img12 from '../../Assets/Certificate/Effective_Email_Writting.png'
import img13 from '../../Assets/Certificate/Prepare_a_Strong_Resume_and_Cover_Letter_Batch_06.png'
import img14 from '../../Assets/Certificate/octanet Intership.png'

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
  img14
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