import React from "react";
import Helmet from "react-helmet";
import { motion } from "framer-motion";
import { pageAnimation, TextAnimations } from "../Animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Title>
        <Hides>
          <motion.h2 variants={TextAnimations}>Get In Touch</motion.h2>
        </Hides>
        <div>
          <Social variants={TextAnimations}>
            <Circle />
            <h2>Social Message</h2>
          </Social>
          <Social variants={TextAnimations}>
            <Circle />
            <h2>Social Email</h2>
          </Social>
          <Social variants={TextAnimations}>
            <Circle />
            <h2>Social App</h2>
          </Social>
        </div>
      </Title>
      <Helmet>
        <title>ContactUs</title>
      </Helmet>
    </ContactStyle>
  );
};
const ContactStyle = styled(motion.div)`
  background-color: #fff;
  min-height: 90vh;
  padding: 5rem 10rem;
  h2 {
    margin-bottom: 4rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem;
    color: #23d997;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;
const Hides = styled.div`
  overflow: hidden;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    font-size: 2rem;
  }
`;

const Circle = styled.div`
  background-color: #353535;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  @media (max-width: 1300px) {
    background-color: #23d997;
  }
`;

export default ContactUs;
