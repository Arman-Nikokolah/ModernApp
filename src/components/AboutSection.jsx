import React from "react";
import armanimage from "../img/arman.jpeg";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2 className="header"> I'm Arman Nikookolah </h2>
          </div>
          <div className="hide">
            <h2 className="header">
              I'm <span style={{ color: "#28d997" }}> Programmer </span> Come
            </h2>
          </div>
          <div className="hide">
            <h2 className="header"> True.</h2>
          </div>
        </div>
        <p className="paragraph">
          Contact us for any photography and videography ideas that you have. We
          have professionlas with amazing skills to help you achieve it.
        </p>
        <button className="btn">Contact us</button>
      </div>
      <div className="image">
        <img src={armanimage} alt="armanimage" className="images" />
      </div>
    </div>
  );
};

export default AboutSection;
