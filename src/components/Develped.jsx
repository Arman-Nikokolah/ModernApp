import React from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { hanimate } from "../Animation";
const Developed = () => {
  const [element, view] = useInView({ threshold: 0.3 });
  const controls = useAnimation();

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return (
    <HeaderStyled>
      <StyleH
        ref={element}
        variants={hanimate}
        initial="hidden"
        animate={controls}
      >
        <h1>Developed by Arman Nikookolah</h1>
      </StyleH>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  text-align: center;
  h1 {
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    font-family: monospace;
  }
`;

const StyleH = styled(motion.div)`
  width: 100%;
  font-size: 1rem;
  color: #63dbad;
  position: absolute;
`;

export default Developed;
