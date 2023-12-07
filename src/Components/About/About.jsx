import React from "react";
import "./About.css";
import heartemoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Card from "../Cards/Card";
import Resume from "./Subham-Jain-Resume.pdf";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element className="services" name="about">
      {/* left side */}
      <div className="awesome">
        <span>About</span>
        <span>Subham</span>
        <span>
          Engaged in intensive skill development at Acciojob, Gurugram,
          maintaining a GPA of 9.5. Graduated from GLA University, Mathura, with
          a Bachelor's in Computer Applications, earning a GPA of 8.47.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={heartemoji}
            heading={"Tools"}
            detail={"Visual Studio Code, Github, Vercel, Figma, Git, Postman"}
          />
        </div>

        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={"HTML, CSS, JavaScript, ReactJS, Java, JSON, APIs"}
          />
        </div>

        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={humble}
            heading={"Concepts"}
            detail={
              "Agile Methodologies, Responsive Design, Test Driven Development, Cross-Browser Compatibility"
            }
          />
        </div>

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
