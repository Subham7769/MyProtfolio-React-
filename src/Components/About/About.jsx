import React from "react";
import "./About.css";
import heartemoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Card from "../Cards/Card";
import Resume from "./Subham-Jain-Resume.pdf";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const About = () => {
  //common properties
  const animationProps = {
    initial: { opacity: 0, x: 500 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  // const animationInfinity = {
  //   initial: { opacity: 0 },
  //   transition: {
  //     type: "smooth",
  //     repeatType: "mirror",
  //     duration: 2,
  //     repeat: Infinity,
  //   },
  // };

  return (
    <Element className="services" name="about">
      {/* left side */}
      <div className="awesome">
        <motion.span {...animationProps} transition={{ delay: 0.1 }}>
          About
        </motion.span>
        <motion.span {...animationProps} transition={{ delay: 0.2 }}>
          Subham
        </motion.span>
        <motion.span {...animationProps} transition={{ delay: 0.3 }}>
          Engaged in intensive skill development at Acciojob, Gurugram,
          maintaining a GPA of <b>9.5</b>. Graduated from GLA University,
          Mathura, with a Bachelor's in Computer Applications, earning a GPA of{" "}
          <b>8.47</b>.
        </motion.span>
        <motion.span {...animationProps} transition={{ delay: 0.4 }}>
          20+ Contests with Avg Score of <b>96%</b>
        </motion.span>
        <motion.span {...animationProps} transition={{ delay: 0.5 }}>
          30+ Project Development with Avg Score of <b>97%</b>
        </motion.span>
        <motion.span {...animationProps} transition={{ delay: 0.6 }}>
          15+ Certifications with Avg Score of <b>94%</b>
        </motion.span>
        <motion.a
          {...animationProps}
          transition={{ delay: 0.7 }}
          href={Resume}
          download
        >
          <button className="button s-button">Download CV</button>
        </motion.a>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 1.5,
            repeat: Infinity,
          }}
          style={{ left: "14rem", top: "-2rem" }}
        >
          <Card
            emoji={heartemoji}
            heading={"Tools"}
            detail={
              "Visual Studio Code, Github, Vercel, Figma, Git, Postman, Jira"
            }
          />
        </motion.div>

        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={
              "HTML, CSS, JavaScript, ReactJS, Java, JSON, Redux Toolkit, RESTful API"
            }
          />
        </motion.div>

        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2.5,
            repeat: Infinity,
          }}
          style={{ top: "17rem", left: "12rem" }}
        >
          <Card
            emoji={humble}
            heading={"Concepts"}
            detail={
              "Agile Methodologies, Responsive Design, Test Driven Development, Cross-Browser Compatibility"
            }
          />
        </motion.div>

        {/* blur divs */}
        <div
          className="blur"
          style={{ background: "#edd0ff", left: "12rem", top: "8rem" }}
        ></div>
      </div>

      {/* blur divs */}
      <div
        className="blur"
        style={{ background: "#C1F5FF", left: "-18rem", top: "15rem" }}
      ></div>
    </Element>
  );
};

export default About;
