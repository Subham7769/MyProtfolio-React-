import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Element } from "react-scroll";

import img0 from "../../img/cryptotracker.png";
import img1 from "../../img/youtube_clone_react.png";
import img2 from "../../img/Imagebazzar.png";
import img3 from "../../img/portfolio.jpeg";
import img4 from "../../img/todoreact.png";
import img5 from "../../img/blinkit.png";
import img6 from "../../img/acciojob.png";
import img7 from "../../img/Otarea.png";
import img8 from "../../img/food.png";
import img9 from "../../img/Jira.png";
import img10 from "../../img/Spotify.png";
import img11 from "../../img/cookpal.png";
import img12 from "../../img/AirBnb.png";
import img13 from "../../img/youtube.png";

const projects = [
  {
    image: img0,
    link: "https://crypto-tracker-navy-ten.vercel.app/",
    name: "cryptotracker",
    desc: "This is a description of project 1",
  },
  {
    image: img1,
    link: "https://youtubr-clone-react.vercel.app/",
    name: "youtube_clone_react",
    desc: "This is a description of project 2",
  },
  {
    image: img2,
    link: "https://image-bazar-infinityscroll.vercel.app/",
    name: "Imagebazzar",
    desc: "This is a description of project 3",
  },
  {
    image: img3,
    link: "https://my-protfolio-react-three.vercel.app/",
    name: "portfolio",
    desc: "This is a description of project 4",
  },
  {
    image: img4,
    link: "https://to-do-list-react-woad-zeta.vercel.app/",
    name: "todoreact",
    desc: "This is a description of project 5",
  },
  {
    image: img5,
    link: "https://subham7769.github.io/Blinkit-clone/",
    name: "blinkit",
    desc: "This is a description of project 6",
  },
  {
    image: img6,
    link: "https://subham7769.github.io/Acciojob-New-Portal/",
    name: "acciojob",
    desc: "This is a description of project 7",
  },
  {
    image: img7,
    link: "https://subham7769.github.io/Otarea/",
    name: "Otarea",
    desc: "This is a description of project 8",
  },
  {
    image: img8,
    link: "https://subham7769.github.io/Food-delivery/",
    name: "food",
    desc: "This is a description of project 9",
  },
  {
    image: img9,
    link: "https://subham7769.github.io/Jira_clone/",
    name: "Jira",
    desc: "This is a description of project 10",
  },
  {
    image: img10,
    link: "https://subham7769.github.io/Spotify_clone/",
    name: "Spotify",
    desc: "This is a description of project 11",
  },
  {
    image: img11,
    link: "https://subham7769.github.io/Cookpal_Menu_Catalogue/",
    name: "cookpal",
    desc: "This is a description of project 12",
  },
  {
    image: img12,
    link: "https://subham7769.github.io/Airbnb-Clone/",
    name: "AirBnb",
    desc: "This is a description of project 13",
  },
  {
    image: img13,
    link: "https://subham7769.github.io/Youtube-Clone/",
    name: "youtube",
    desc: "This is a description of project 14",
  },
];

export const Portfolio = () => (
  <Element className="portfolio" name="portfolio">
    <span>Recent Projects</span>
    <span>Projects</span>

    {/* slider */}
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      grabCursor={true}
      className="portfolio-slider"
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.name}>
          <a target="_blank" href={project.link}>
            <img src={project.image} alt={project.name} />
            <p className="live">Live</p>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>

  </Element>
)

export default Portfolio;
