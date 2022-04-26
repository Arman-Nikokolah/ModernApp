import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
import { MovieState } from "../movieState";
import styled from "styled-components";
import Helmet from "react-helmet";

const MovieDetails = () => {
  const locations = useLocation();
  const url = locations.pathname;

  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const Currently = movies.filter((ed) => ed.url === url);
    setMovie(Currently[0]);
  }, [movies, url]);

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Helmet>
        <title>MovieDetails</title>
      </Helmet>
      {movie && (
        <Detailes>
          <Heading>
            <h2>{movie.title}</h2>
            <img src={movie.secondaryImg} alt="" />
          </Heading>
          <Awards>
            {movie.awards.map((item) => (
              <Award
                title={item.title}
                description={item.description}
                key={item.title}
              />
            ))}
          </Awards>
          <ImageStyle>
            <img className="img" src={movie.mainImg} alt="webcoen" />
          </ImageStyle>
        </Detailes>
      )}
    </motion.div>
  );
};

const ImageStyle = styled.div`
  min-height: 80vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Detailes = styled.div`
  color: white;
`;
const Heading = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h2 {
    text-align: center;
    padding-bottom: 2rem;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5rem 5rem;
`;

const AwardStyle = styled.div`
  padding-bottom: 5rem;
  h3 {
    color: white;
    text-align: center;
  }
  .line {
    background-color: #23d997;
    width: 80%;
    height: 0.2rem;
    margin: 1rem 2rem;
  }
  p {
    width: 100%;
    text-align: center;
  }
`;

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetails;
