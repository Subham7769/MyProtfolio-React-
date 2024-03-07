import React from "react";
import "./Intro.css";
import github from "../../img/github.png";
import instagram from "../../img/instagram.png";
import linkedin from "../../img/linkedin.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <Element className="intro" name="intro">
      <div className="i-left">
        <div className="i-name">
          <motion.span
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            Hi! I Am
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Subham Jain
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            As a trained professional, I bring a dynamic combination of
            creativity and technical proficiency to frontend development and web
            design. Committed to delivering high-quality work, I specialize in
            crafting engaging user interfaces.
          </motion.span>
        </div>
        <motion.button
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="button i-button"
        >
          <Link to="contact" smooth={true} duration={300}>
            Hire Me
          </Link>
        </motion.button>
        <motion.div
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="i-icons"
        >
          <a href="https://github.com/Subham7769">
            <img src={github} alt="" />
          </a>
          <a href="https://www.instagram.com/shubhamrapariya/">
            <img src={instagram} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/shubhamjain7769/">
            <img src={linkedin} alt="" />
          </a>
        </motion.div>
      </div>
      <div className="i-right">
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <img src={boy} alt="" />
        </motion.div>

        
        <motion.img
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          src={glassesimoji}
          alt=""
          style={{ width: "150px" }}
        />

        <FloatingDiv img={Crown} txt1="Frontend" txt2="Developer" />

        <FloatingDiv img={thumbup} txt1="Outstanding" txt2="Results" />

        {/* blur divs */}
        <div
          className="blur"
          style={{ background: "#edd0ff", left: "56%", top: "-18%" }}
        ></div>
        <div
          className="blur"
          style={{ background: "#C1F5FF", left: "-9rem", top: "17rem" }}
        ></div>
      </div>
    </Element>
  );
};

export default Intro;
