import React from "react";

const FaqSection = () => {
  return (
    <div className="faq">
      <h2 className="header">
        Any question <span style={{ color: "#28d997" }}> FAQ </span>
      </h2>
      <div className="question">
        <h4 className="header4">How Do I Start This Site ?</h4>
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
        <div className="answer">
          <p className="paragraph-faq">Lorem ipsum dolor sit amet.</p>
          <p className="paragraph-faqs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            incidunt modi, repellendus nostrum provident a!
          </p>
        </div>
      </div>

      {/* question 4 */}

      <div className="question">
        <h4 className="header4">What Product Do You Offers ? </h4>
        <div className="answer">
          <p className="paragraph-faq">Lorem ipsum dolor sit amet.</p>
          <p className="paragraph-faqs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            incidunt modi, repellendus nostrum provident a!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
