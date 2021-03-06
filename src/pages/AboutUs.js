import AboutSection from "../components/AboutSection";
import React from "react";
import ServiceSection from "../components/ServiceSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
import Developed from "../components/Develped";

const AboutUS = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServiceSection />
      <FaqSection />
      <Developed />
    </motion.div>
  );
};

export default AboutUS;
