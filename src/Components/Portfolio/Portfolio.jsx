import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css'
import portfolio from '../../img/portfolio.jpeg'
import youtube from '../../img/youtube.png'
import AirBnb from '../../img/AirBnb.png'
import cookpal from '../../img/cookpal.png'
import blinkit from '../../img/blinkit.png'
import acciojob from '../../img/acciojob.png'
import Otarea from '../../img/Otarea.png'
import food from '../../img/food.png'
import Jira from '../../img/Jira.png'
import Spotify from '../../img/Spotify.png'
import youtube_react from '../../img/youtube_clone_react.png'
import todoreact from '../../img/todoreact.png'
import Imagebazzar from '../../img/Imagebazzar.png'
import { Element } from 'react-scroll'


const Portfolio = () => {

    
    
  return (
    <Element className="portfolio" name="portfolio">
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={1}
        grabCursor={true}
        className='portfolio-slider'>
            <SwiperSlide>
                <a target="_blank" href="https://youtubr-clone-react.vercel.app/"><img src={youtube_react} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target="_blank" href="https://image-bazar-infinityscroll.vercel.app/"><img src={Imagebazzar} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target="_blank" href="https://to-do-list-react-woad-zeta.vercel.app/"><img src={todoreact} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target="_blank" href="https://my-protfolio-react-three.vercel.app/"><img src={portfolio} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target="_blank" href="https://subham7769.github.io/Youtube-Clone/"><img src={youtube} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target="_blank" href="https://subham7769.github.io/Airbnb-Clone/"><img src={AirBnb} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target="_blank" href="https://subham7769.github.io/Cookpal_Menu_Catalogue/"><img src={cookpal} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target="_blank" href="https://subham7769.github.io/Blinkit-clone/"><img src={blinkit} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target="_blank" href="https://subham7769.github.io/Acciojob-New-Portal/"><img src={acciojob} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target="_blank" href="https://subham7769.github.io/Otarea/"><img src={Otarea} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target="_blank" href="https://subham7769.github.io/Food-delivery/"><img src={food} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target="_blank" href="https://subham7769.github.io/Jira_clone/"><img src={Jira} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target="_blank" href="https://subham7769.github.io/Spotify_clone/"><img src={Spotify} alt="" /></a>
            </SwiperSlide>
        </Swiper>
    </Element>
  )
}

export default Portfolio



