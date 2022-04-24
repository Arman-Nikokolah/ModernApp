import React from "react";
import styled from "styled-components";
import wolf from "../img/reder.jpg";

const ServiceSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2 className="header">
          High <span style={{ color: "#28d997" }}> Wolf </span> Imag{" "}
        </h2>
        <Images>
          <img src={wolf} alt="wolf" />
        </Images>
      </div>
    </div>
  );
};

const Images = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
  width: 100%;
  height: 100vh;
`;

export default ServiceSection;
