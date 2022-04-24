import React from "react";
import armanimage from "../img/arman.jpg";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              Your <span style={{ color: "#28d997" }}> dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2> true.</h2>
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
