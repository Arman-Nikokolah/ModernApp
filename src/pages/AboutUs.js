import AboutSection from "../components/AboutSection";
import React from "react";
import ServiceSection from "../components/ServiceSection";
import FaqSection from "../components/FaqSection";
import Helmet from "react-helmet";

const AboutUS = () => {
  return (
    <>
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </>
  );
};

export default AboutUS;
