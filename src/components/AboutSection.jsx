import React from "react";
import armanimage from "../img/arman.jpg";
import { motion } from "framer-motion";
import { StyledAbout, Description, Hide, Image } from "../style";
import { Link } from "react-router-dom";
import Waves from "../components/Wave";

import { TextAnimations, buttonAnimation, ImageAnimation } from "../Animation";
const AboutSection = () => {
  return (
    <StyledAbout>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={TextAnimations} className="header">
              {" "}
              I'm Arman Nikookolah{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={TextAnimations} className="header">
              I'm <span style={{ color: "#28d997" }}> Programmer </span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={TextAnimations} className="header">
              Come True.
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={TextAnimations} className="paragraph">
          Contact us for any photography and videography ideas that you have. We
          have professionlas with amazing skills to help you achieve it.
        </motion.p>
        <Link to="/contactus">
          <motion.button variants={buttonAnimation} className="btn">
            Contact us
          </motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img
          variants={ImageAnimation}
          src={armanimage}
          alt="armanimage"
          className="images"
        />
      </Image>
      <Waves />
    </StyledAbout>
  );
};

export default AboutSection;
