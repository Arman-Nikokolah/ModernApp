import React, { useState } from "react";
import styled from "styled-components";
import { StyledAbout } from "../style";
import { AnimateSharedLayout, motion } from "framer-motion";
const FaqSection = () => {
  const [faq, setFaq] = useState(false);
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);

  return (
    <FAQ>
      <h2 className="header">
        Any Question <span style={{ color: "#28d997" }}> FAQ </span>
      </h2>

      <AnimateSharedLayout>
        <motion.div layout className="question">
          <h4 className="header4" onClick={() => setFaq(!faq)}>
            How Do I Start This Site ?
          </h4>
          <div className="faq-line"></div>
          {faq && (
            <div className="answer">
              <p className="paragraph-faq">Lorem ipsum dolor sit amet.</p>
              <p className="paragraph-faqs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores incidunt modi, repellendus nostrum provident a!
              </p>
            </div>
          )}
        </motion.div>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <motion.div layout className="question">
          <h4 className="header4" onClick={() => setFaq1(!faq1)}>
            Daily Schedule ?{" "}
          </h4>
          <div className="faq-line"></div>
          {faq1 && (
            <div className="answer">
              <p className="paragraph-faq">Lorem ipsum dolor sit amet.</p>
              <p className="paragraph-faqs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores incidunt modi, repellendus nostrum provident a!
              </p>
            </div>
          )}
        </motion.div>
      </AnimateSharedLayout>

      <AnimateSharedLayout>
        <motion.div layout className="question">
          <h4 className="header4" onClick={() => setFaq2(!faq2)}>
            Diffrent Payment Methods ?
          </h4>
          <div className="faq-line"></div>
          {faq2 && (
            <div className="answer">
              <p className="paragraph-faq">Lorem ipsum dolor sit amet.</p>
              <p className="paragraph-faqs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores incidunt modi, repellendus nostrum provident a!
              </p>
            </div>
          )}
        </motion.div>
      </AnimateSharedLayout>
    </FAQ>
  );
};

const FAQ = styled(StyledAbout)`
  display: block;

  h2 {
    padding-bottom: 5rem;
    text-align: center;
  }

  .faq-line {
    background-color: #28d997;
    width: 100%;
    height: 0.1rem;
    margin: 2rem 0;
  }
  h4 {
    font-size: 1.8rem;
  }
  .answer {
    padding: 2rem 0rem;
  }
  p {
    padding: 1rem 0rem;
  }
  .question {
    cursor: pointer;
  }
`;

export default FaqSection;
