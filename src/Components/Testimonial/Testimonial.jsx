import React from 'react'
import './Testimonial.css'
import {Swiper,SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import profilePic5 from '../../img/profile5.jpg'
import { Element } from 'react-scroll'




const Testimonial = () => {

    const clients = [
        {
            img: profilePic1,
            profile:"SDE @Microsoft",
            review:
              "Outstanding job! The webpage exhibits excellent responsiveness, and the implementation of the scrollable product card section is spot on. The header is visually appealing, contributing to an overall great outcome. The design aligns perfectly with the specifications outlined in Figma, showcasing your precise and accurate implementation of every detail.",
          },
          {
            img: profilePic2,
            profile:"Fronted Developer @Acciojob",
            review:
              "Excellent work. Webpage is responsive, scrollable product card section is implemented properly. Header looks good. Overall work is great. Design is perfect wrt to figma .You have correctly implemented what you have been taught ---Instructor Ayush",
          },
          {
            img: profilePic3,
            profile:"Software Developer @Walmart",
            review:
              "Your promptness and the quality of your user interface have been outstanding. Your commitment and effectiveness are truly praiseworthy.",
          },
          {
            img: profilePic4,
            profile:"Software Developer @Blue Yonder",
            review:
              "You've been doing an excellent job with your responsiveness and the quality of your user interface. Your dedication and performance are truly commendable.",
          },
          {
            img: profilePic5,
            profile:"Frontend Developer @BlackBeltHelp",
            review:
              "Impressive work on both responsiveness and UI quality, showcasing outstanding commitment and performance. The project excels in adaptability, flawless execution of the product card section, and meticulous adherence to Figma specifications, resulting in an overall impressive outcome",
          },
    ]

    
  return (
    <Element className="t-wrapper" name='testimonial'>
        <div className="t-heading">
            <span>Feedback of </span>
            <span>Exceptional Work</span>
            <span> for me...</span>
            
            {/* blur divs */}
        <div className="blur" style={{background:'var(--purple)',left:'6%',top:'10%'}}></div>
        <div className="blur" style={{background:'skyblue',left:'66%',top:'56%'}}></div>
        </div>
        
        {/* slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        autoplay={
          {
            delay:2500,
            disableOnInteraction:false,
          }
        }>
            {
                clients.map((clients,index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                            <img src={clients.img} alt="" />
                            <p>{clients.profile}</p>
                            <p>{clients.review}</p>
                            </div>
                        </SwiperSlide>
                    )
                })
            }

          
        </Swiper>
    </Element>
  )
}

export default Testimonial