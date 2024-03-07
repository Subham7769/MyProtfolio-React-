import React from "react";
import "./Training.css";
import microsoft from "../../img/microsoft.png";
import meta from "../../img/meta.png";
import tcs from "../../img/tcs.png";
import wallmart from "../../img/wallmart.png";
import acciojob from "../../img/acciojob_logo.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Work = () => {
  const animationProps = {
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1.5 },
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    variants: {
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0 },
    },
  };
  return (
    <div className="work">
      {/* left side */}
      <div className="awesome">
        <motion.span {...animationProps}  transition={{ delay: 0.2 }}>Trained By</motion.span>
        <motion.span {...animationProps} transition={{ delay: 0.2 }}>
          India’s Top Instructors
        </motion.span>
        <motion.span {...animationProps} transition={{ delay: 0.3 }}>
          Mastered frontend development with India's top instructors, acquiring
          hands-on skills for impactful web solutions. <br />
          Now equipped to craft compelling digital experiences with cutting-edge
          expertise.
        </motion.span>
        <Link to="contact" smooth={true} duration={300}>
          <motion.button
            {...animationProps}
            transition={{ delay: 0.4 }}
            className="button s-button"
          >
            Hire Me
          </motion.button>
        </Link>
      </div>

      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={microsoft} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={meta} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={tcs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={wallmart} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={acciojob} alt="" />
          </div>
        </div>
        {/* background circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>

      {/* blur divs */}
      <div
        className="blur"
        style={{ background: "#C1F5FF", left: "-18rem", top: "15rem" }}
      ></div>
    </div>
  );
};

export default Work;
