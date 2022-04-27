import React from "react";
import { StyledAbout, Description, Image } from "../style";
// import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import milkway from "../img/img (40).webp";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { fade } from "../Animation";

const ServiceSection = () => {
  const [element, view] = useInView({ threshold: 0.3 });
  const controls = useAnimation();

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  const altimage = "clock";
  return (
    <Services>
      <Description>
        <motion.h2
          animate={controls}
          initial="hidden"
          ref={element}
          variants={fade}
        >
          High <span style={{ color: "#28d997" }}> quality </span> Services{" "}
        </motion.h2>
        <Cards
          ref={element}
          animate={controls}
          initial="hidden"
          variants={fade}
        >
          <div className="card">
            <div className="icon">
              <img src={clock} alt={altimage} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* card 2 */}
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt={altimage} />
              <h3>TeamWork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* card 3 */}
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt={altimage} />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* card 4 */}
          <div className="card">
            <div className="icon">
              <img src={money} alt={altimage} />
              <h3> Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Cards>
      </Description>
      <Image>
        <img src={milkway} alt={altimage} />
      </Image>
    </Services>
  );
};

const Services = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    padding: 2rem 0rem 4rem 0rem;
    width: 60%;
  }
`;

const Cards = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
`;

export default ServiceSection;
