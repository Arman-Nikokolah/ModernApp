import React from "react";
import styled from "styled-components";
import { StyledAbout } from "../style";
const FaqSection = () => {
  return (
    <FAQ>
      <h2 className="header">
        Any Question <span style={{ color: "#28d997" }}> FAQ </span>
      </h2>
      <div className="question">
        <h4 className="header4">How Do I Start This Site ?</h4>
        <div className="faq-line"></div>
        <div className="answer">
          <p className="paragraph-faq">Lorem ipsum dolor sit amet.</p>
          <p className="paragraph-faqs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            incidunt modi, repellendus nostrum provident a!
          </p>
        </div>
      </div>
      {/* question 2 */}
      <div className="question">
        <h4 className="header4">Daily Schedule ? </h4>
        <div className="faq-line"></div>
        <div className="answer">
          <p className="paragraph-faq">Lorem ipsum dolor sit amet.</p>
          <p className="paragraph-faqs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            incidunt modi, repellendus nostrum provident a!
          </p>
        </div>
      </div>
      {/* question 3 */}
      <div className="question">
        <h4 className="header4">Diffrent Payment Methods ?</h4>
        <div className="faq-line"></div>
        <div className="answer">
          <p className="paragraph-faq">Lorem ipsum dolor sit amet.</p>
          <p className="paragraph-faqs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            incidunt modi, repellendus nostrum provident a!
          </p>
        </div>
      </div>
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
