import React from "react";
import armanimage from "../img/arman.jpg";
import { motion } from "framer-motion";
import { StyledAbout, Description, Hide, Image } from "../style";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <StyledAbout>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 className="header"> I'm Arman Nikookolah </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 className="header">
              I'm <span style={{ color: "#28d997" }}> Programmer </span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 className="header">Come True.</motion.h2>
          </Hide>
        </motion.div>
        <p className="paragraph">
          Contact us for any photography and videography ideas that you have. We
          have professionlas with amazing skills to help you achieve it.
        </p>
        <Link to="/contactus">
          <button className="btn">Contact us</button>
        </Link>
      </Description>
      <Image>
        <img src={armanimage} alt="armanimage" className="images" />
      </Image>
    </StyledAbout>
  );
};

export default AboutSection;
