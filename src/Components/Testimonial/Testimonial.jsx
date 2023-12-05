import React from 'react'
import './Testimonial.css'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';



const Testimonial = () => {

    const clients = [
        {
            img: profilePic1,
            review:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
          },
          {
            img: profilePic2,
            review:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
          },
          {
            img: profilePic3,
            review:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
          },
          {
            img: profilePic4,
            review:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
          },
    ]


  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients Always get </span>
            <span>Exceptional Work</span>
            <span> from me...</span>
            {/* blur divs */}
        <div className="blur" style={{background:'var(--purple)',left:'6%',top:'10%'}}></div>
        <div className="blur" style={{background:'skyblue',left:'66%',top:'56%'}}></div>
        

        </div>
        
        {/* slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}>
            {
                clients.map((clients,index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                            <img src={clients.img} alt="" />
                            <p>{clients.review}</p>
                            </div>
                        </SwiperSlide>
                    )
                })
            }

          
        </Swiper>
    </div>
  )
}

export default Testimonial