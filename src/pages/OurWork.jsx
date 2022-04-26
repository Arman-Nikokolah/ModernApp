import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import fitness from "../img/fitness.jpg";
import love from "../img/lover.jpg";
import dysor from "../img/victory.jpg";

const OurWorks = () => {
  return (
    <Work>
      <Movie>
        <h2>The Fitness</h2>
        <div className="line"></div>
        <Link to="/work/fitness">
          <img src={fitness} alt="fitnes" />
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

const Work = styled.div`
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
export default OurWorks;
