import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { MovieState } from "../movieState";
import styled from "styled-components";
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
    <>
      {movie && (
        <Detailes>
          <Heading>
            <h2>{movie.title}</h2>
            <img src={movie.secondaryImg} alt="" />
          </Heading>
        </Detailes>
      )}
    </>
  );
};

const Detailes = styled.div`
  min-height: 90vh;
  padding: 5rem 2rem;
`;
const Heading = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h2 {
    padding-bottom: 2rem;
  }
`;

export default MovieDetails;
