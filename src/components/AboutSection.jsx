import React from "react";
import armanimage from "../img/arman.jpg";
import { StyledAbout, Description, Hide, Image } from "../style";
const AboutSection = () => {
  return (
    <StyledAbout>
      <Description>
        <div className="title">
          <Hide>
            <h2 className="header"> I'm Arman Nikookolah </h2>
          </Hide>
          <Hide>
            <h2 className="header">
              I'm <span style={{ color: "#28d997" }}> Programmer </span>
            </h2>
          </Hide>
          <Hide>
            <h2 className="header">Come True.</h2>
          </Hide>
        </div>
        <p className="paragraph">
          Contact us for any photography and videography ideas that you have. We
          have professionlas with amazing skills to help you achieve it.
        </p>
        <button className="btn">Contact us</button>
      </Description>
      <Image>
        <img src={armanimage} alt="armanimage" className="images" />
      </Image>
    </StyledAbout>
  );
};

export default AboutSection;
