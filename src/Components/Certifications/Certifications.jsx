import React from 'react'
import '../Portfolio/Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css'
import Atlassian from '../../Assets/Certificate/Agile with Atlassian Jira.png'
import Meta_HTML from '../../Assets/Certificate/Meta_HTML & CSS in Depth 04.png'
import Meta_Programmin from '../../Assets/Certificate/Meta_Programmin with javascript 04.png'
import Meta_React_Basics from '../../Assets/Certificate/Meta_React_Basics 05.png'
import Meta_Version from '../../Assets/Certificate/Meta_Version Control 03.png'
import Meta_Introduction from '../../Assets/Certificate/Meta_Introduction to Front-End Development_01.jpeg'
import Corporate_Telephone from '../../Assets/Certificate/Corporate Telephone Etiquette Batch 07.png'
import Business_Atiquette from '../../Assets/Certificate/Business_Atiquette.png'
import SoftSkills from '../../Assets/Certificate/SoftSkills.png'
import Presentation from '../../Assets/Certificate/Presentation.png'
import Improve_Interpersonal_Skills from '../../Assets/Certificate/Improve_Interpersonal_Skills.png'
import Effective_Email_Writting from '../../Assets/Certificate/Effective_Email_Writting.png'
import Prepare_a_Strong_Resume_and_Cover_Letter_Batch_06 from '../../Assets/Certificate/Prepare_a_Strong_Resume_and_Cover_Letter_Batch_06.png'
import octanet from '../../Assets/Certificate/octanet Intership.png'
import { Element } from 'react-scroll'


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
            <SwiperSlide>
                    <img src={Atlassian} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Meta_React_Basics} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Meta_Introduction} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Meta_Version} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Meta_Programmin} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Meta_HTML} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Corporate_Telephone} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Business_Atiquette} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={SoftSkills} alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={Presentation} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Improve_Interpersonal_Skills} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Effective_Email_Writting} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={octanet} alt="" />
            </SwiperSlide>
        </Swiper>
    </Element>
  )
}

export default Certifications



