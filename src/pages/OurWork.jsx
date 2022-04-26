import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import fitness from "../img/fitness.jpg";
import love from "../img/lover.jpg";
import dysor from "../img/victory.jpg";
import Helmet from "react-helmet";
import { motion } from "framer-motion";
import {
  lineAnimate,
  SliderAnimation,
  pageAnimation,
  fade,
  ImageAnimation,
  Slider,
} from "../Animation";
const OurWorks = () => {
  return (
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <Helmet>
        <title>OurWorker</title>
      </Helmet>
      <motion.div variants={SliderAnimation}>
        <Framer1 variants={Slider}></Framer1>
        <Framer2 variants={Slider}></Framer2>
        <Framer3 variants={Slider}></Framer3>
      </motion.div>

      <Movie>
        <motion.h2 variants={fade}>The Fitness</motion.h2>
        <motion.div variants={lineAnimate} className="line"></motion.div>
        <Link to="/work/fitness">
          <Hide>
            <motion.img variants={ImageAnimation} src={fitness} alt="fitnes" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <h2>The Lover</h2>
        <div className="line"></div>
        <Link to="/work/love">
          <img src={love} alt="fitnes" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Dysors</h2>
        <div className="line"></div>
        <Link to="/work/dysors">
          <img src={dysor} alt="fitnes" />
        </Link>
      </Movie>
      <div>
        <p style={{ width: "70%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          tempore! Culpa laborum, blanditiis consequuntur eius mollitia sunt
          quae distinctio officiis, porro quos qui autem provident cumque, iure
          sequi ab architecto.
        </p>
      </div>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 2rem;

  h2 {
    padding: 1rem 0rem;
    font-size: 1.8rem;
    font-family: monospace;
  }
`;
const Movie = styled.div`
  padding-bottom: 5rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease-in;
  }

  .line {
    width: 100%;
    height: 0.2rem;
    background-color: #fff;
    transition: all 0.2s ease;
    margin-bottom: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Framer1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0%;
  z-index: 2;
  width: 100%;
  height: 100vh;
  background-color: #f1f1f1;
`;

const Framer2 = styled(Framer1)`
  background-color: #2aadc4;
`;

const Framer3 = styled(Framer1)`
  background-color: #7f1eac;
`;

export default OurWorks;
